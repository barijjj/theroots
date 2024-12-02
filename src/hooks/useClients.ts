import { useState } from 'react';
import { Client } from '../types';
import { generateId } from '../utils/helpers';

export const useClients = (initialClients: Client[]) => {
  const [clients, setClients] = useState<Client[]>(initialClients);

  const addClient = (client: Omit<Client, 'id'>) => {
    const newClient = {
      ...client,
      id: generateId(),
    };
    setClients((prev) => [...prev, newClient]);
  };

  const updateClient = (id: string, updates: Partial<Client>) => {
    setClients((prev) =>
      prev.map((client) =>
        client.id === id ? { ...client, ...updates } : client
      )
    );
  };

  const deleteClient = (id: string) => {
    setClients((prev) => prev.filter((client) => client.id !== id));
  };

  return {
    clients,
    addClient,
    updateClient,
    deleteClient,
  };
};