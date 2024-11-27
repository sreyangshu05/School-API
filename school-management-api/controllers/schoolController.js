const db = require('../config/db');

// Add a new school
exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, address, latitude, longitude], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'School added successfully', schoolId: result.insertId });
  });
};

// List schools
exports.listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ message: 'Latitude and longitude are required' });
  }

  const sql = 'SELECT * FROM schools';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    const haversineDistance = (lat1, lon1, lat2, lon2) => {
      const toRad = (degree) => (degree * Math.PI) / 180;
      const R = 6371; // Earth's radius in km

      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c; // Distance in km
    };

    const schools = results.map((school) => ({
      ...school,
      distance: haversineDistance(latitude, longitude, school.latitude, school.longitude),
    }));

    schools.sort((a, b) => a.distance - b.distance);
    res.status(200).json(schools);
  });
};
