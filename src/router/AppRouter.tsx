import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../modules/auth/LoginScreen';
import { CalendarScreen } from '../modules/calendar/CalendarScreen';

export const AppRouter = () => {
  return (
    <div>
      <h1>App Router</h1>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<CalendarScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
