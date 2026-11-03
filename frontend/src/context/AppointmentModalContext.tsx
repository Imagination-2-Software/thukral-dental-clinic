import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

interface AppointmentModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const AppointmentModalContext = createContext<AppointmentModalContextType | undefined>(undefined);

export const AppointmentModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-trigger popup 4 seconds after website loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <AppointmentModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </AppointmentModalContext.Provider>
  );
};

export const useAppointmentModal = () => {
  const context = useContext(AppointmentModalContext);
  if (!context) {
    throw new Error('useAppointmentModal must be used within an AppointmentModalProvider');
  }
  return context;
};
