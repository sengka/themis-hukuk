const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

let messages = []; // İletişim mesajlarını saklar
let appointments = []; // Randevu verilerini saklar

// İletişim formu verilerini al
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Tüm alanlar gereklidir' });
  }
  const newMessage = { id: Date.now(), name, email, message, timestamp: new Date() };
  messages.push(newMessage);
  res.status(201).json({ message: 'Mesaj başarıyla alındı', data: newMessage });
});

// İletişim mesajlarını listele (test için)
app.get('/api/contact', (req, res) => {
  res.json(messages);
});

// Randevu listesini al
app.get('/api/appointments', (req, res) => {
  res.json(appointments);
});

// Yeni randevu ekle
app.post('/api/appointments', (req, res) => {
  const { name, email, date, time } = req.body;
  if (!name || !email || !date || !time) {
    return res.status(400).json({ message: 'Tüm alanlar gereklidir' });
  }
  // 10:00-16:00 arası kontrol
  const hour = parseInt(time.split(':')[0]);
  if (hour < 10 || hour >= 16) {
    return res.status(400).json({ message: 'Randevu saatleri 10:00-16:00 arasındadır' });
  }
  const newAppointment = { id: Date.now(), name, email, date, time, timestamp: new Date() };
  appointments.push(newAppointment);
  res.status(201).json({ message: 'Randevu başarıyla alındı', data: newAppointment });
});

app.listen(port, () => {
  console.log(`API sunucusu ${port} portunda çalışıyor!`);
});