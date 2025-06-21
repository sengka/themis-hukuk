import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Appointments: React.FC = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', date: '', time: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/appointments');
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Randevuları çekerken hata:', error);
    }
  };

  const handleDateClick = (arg: any) => {
    setFormData({ ...formData, date: arg.dateStr, time: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus(data.message);
        setFormData({ name: '', email: '', date: '', time: '' }); // Formu temizle
        fetchAppointments(); // Randevuları yenile
      } else {
        setStatus('Bir hata oluştu, lütfen tekrar deneyin.');
      }
    } catch (error) {
      setStatus('Bir hata oluştu, lütfen tekrar deneyin.');
      console.error('Randevu gönderirken hata:', error);
    }
  };

  const events = appointments.map((appt: any) => ({
    title: `${appt.name} - ${appt.time}`,
    start: `${appt.date}T${appt.time}:00`,
    backgroundColor: 'red', // Dolu randevular kırmızı
  }));

  return (
    <div className="flex flex-col min-h-screen bg-dark-blue text-light-gray">
      <Navbar />
      <div className="flex-grow pt-16">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold text-gold mb-6 text-center">Randevu Al</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="bg-mid-blue p-4 rounded-lg shadow-md">
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  initialView="timeGridDay"
                  events={events}
                  dateClick={handleDateClick}
                  selectable={true}
                  slotMinTime="10:00:00"
                  slotMaxTime="16:00:00"
                  height="auto"
                  contentHeight="600px"
                />
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="bg-mid-blue p-6 rounded-lg shadow-md">
                <div className="mb-4 text-left">
                  <label className="block text-gold mb-2" htmlFor="name">Adınız</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-light-gray text-dark-blue"
                    required
                  />
                </div>
                <div className="mb-4 text-left">
                  <label className="block text-gold mb-2" htmlFor="email">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-light-gray text-dark-blue"
                    required
                  />
                </div>
                <div className="mb-4 text-left">
                  <label className="block text-gold mb-2" htmlFor="time">Saat</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-light-gray text-dark-blue"
                    min="10:00"
                    max="15:30"
                    step="1800" // 30 dakikalık aralıklar
                    required
                  />
                </div>
                <button type="submit" className="btn bg-gold text-dark-blue hover:bg-light-gold px-6 py-3 w-full transition duration-300">
                  Randevu Al
                </button>
                {status && <p className="mt-4 text-center text-gold">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Appointments;