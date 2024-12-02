import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ResourceList from './components/ResourceList';
import Timeline from './components/Timeline';
import DailyView from './components/DailyView';
import BookingModal from './components/BookingModal';
import ClientsPage from './pages/ClientsPage';
import ResourceAvailabilityModal from './components/ResourceAvailabilityModal';
import ResourcesPage from './pages/ResourcesPage';
import SettingsPage from './pages/SettingsPage';
import ProjectsPage from './pages/ProjectsPage';
import { useResources } from './hooks/useResources';
import { useBookings } from './hooks/useBookings';
import { useDepartments } from './hooks/useDepartments';
import { useProjects } from './hooks/useProjects';
import { useClients } from './hooks/useClients';
import { useUser } from './hooks/useUser';
import { ColorFilterType, Resource, Booking } from './types';
import { 
  sampleDepartments, 
  sampleResources, 
  sampleBookings, 
  sampleProjects,
  sampleClients,
  sampleUser 
} from './data/sampleData';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [currentView, setCurrentView] = useState<'schedule' | 'resources' | 'projects' | 'clients' | 'settings'>('schedule');
  const [scheduleView, setScheduleView] = useState<'week' | 'day'>('week');
  const [colorFilter, setColorFilter] = useState<ColorFilterType>('none');
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [focusedResource, setFocusedResource] = useState<Resource | null>(null);
  
  const { departments, addDepartment, updateDepartment, deleteDepartment } = useDepartments(sampleDepartments);
  const { resources, addResource, updateResource, deleteResource } = useResources(sampleResources);
  const { bookings, addBooking, deleteBooking, updateBooking } = useBookings(sampleBookings);
  const { projects, addProject, deleteProject, updateProject } = useProjects(sampleProjects);
  const { clients, addClient, updateClient, deleteClient } = useClients(sampleClients);
  const { user, updateProfile, changePassword } = useUser(sampleUser);

  const handlePreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const handleResourceClick = (resource: Resource) => {
    setSelectedResource(resource);
  };

  const handleFocusResource = (resource: Resource | null) => {
    setFocusedResource(resource);
  };

  const getBookingColor = (booking: Booking) => {
    if (colorFilter === 'client') {
      const project = projects.find(p => p.name === booking.projectName);
      return project?.color || booking.color;
    }
    return booking.color;
  };

  const filteredResources = focusedResource 
    ? [focusedResource]
    : resources;

  const renderContent = () => {
    switch (currentView) {
      case 'settings':
        return (
          <SettingsPage
            user={user}
            onUpdateProfile={updateProfile}
            onChangePassword={changePassword}
          />
        );
      case 'resources':
        return (
          <ResourcesPage
            resources={resources}
            departments={departments}
            onAddResource={addResource}
            onDeleteResource={deleteResource}
            onAddDepartment={addDepartment}
            onUpdateDepartment={updateDepartment}
            onDeleteDepartment={deleteDepartment}
          />
        );
      case 'projects':
        return (
          <ProjectsPage
            projects={projects}
            onAddProject={addProject}
            onDeleteProject={deleteProject}
            onUpdateProject={updateProject}
          />
        );
      case 'clients':
        return (
          <ClientsPage
            clients={clients}
            onAddClient={addClient}
            onUpdateClient={updateClient}
            onDeleteClient={deleteClient}
          />
        );
      default:
        return (
          <>
            <Header
              currentDate={currentDate}
              onPreviousWeek={handlePreviousWeek}
              onNextWeek={handleNextWeek}
              onAddBooking={() => setShowBookingModal(true)}
              view={scheduleView}
              onViewChange={setScheduleView}
              colorFilter={colorFilter}
              onColorFilterChange={setColorFilter}
              focusedResource={focusedResource}
              onClearFocus={() => handleFocusResource(null)}
            />
            <div className="flex-1 flex overflow-hidden">
              <ResourceList
                resources={resources}
                departments={departments}
                onResourceClick={handleResourceClick}
                onFocusResource={handleFocusResource}
                focusedResource={focusedResource}
              />
              {scheduleView === 'week' ? (
                <Timeline
                  resources={filteredResources}
                  bookings={bookings.map(booking => ({
                    ...booking,
                    color: getBookingColor(booking)
                  }))}
                  startDate={currentDate}
                  daysToShow={7}
                  onDeleteBooking={deleteBooking}
                />
              ) : (
                <DailyView
                  resources={filteredResources}
                  bookings={bookings.map(booking => ({
                    ...booking,
                    color: getBookingColor(booking)
                  }))}
                  currentDate={currentDate}
                  onDeleteBooking={deleteBooking}
                />
              )}
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        {renderContent()}
      </div>

      {showBookingModal && (
        <BookingModal
          resources={resources}
          onClose={() => setShowBookingModal(false)}
          onSave={addBooking}
        />
      )}

      {selectedResource && (
        <ResourceAvailabilityModal
          resource={selectedResource}
          onClose={() => setSelectedResource(null)}
          onFocusResource={handleFocusResource}
          isFocused={focusedResource?.id === selectedResource.id}
        />
      )}
    </div>
  );
}

export default App;