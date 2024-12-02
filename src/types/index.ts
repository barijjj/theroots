export interface Resource {
  id: string;
  name: string;
  role: string;
  departmentId: string;
  avatar?: string;
  availability: {
    start: string;
    end: string;
  };
}

export interface Department {
  id: string;
  name: string;
  color: string;
  description?: string;
}

export interface Booking {
  id: string;
  resourceId: string;
  projectName: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  color: string;
  clientName?: string;
}

export interface Project {
  id: string;
  name: string;
  color: string;
  clientName: string;
  startDate?: string;
  endDate?: string;
  billable: boolean;
  activityTypes: string[];
  description?: string;
  budget?: number;
  status: 'active' | 'completed' | 'on-hold';
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  logo?: string;
  color: string;
  description?: string;
  employees?: ClientEmployee[];
}

export interface ClientEmployee {
  id: string;
  name: string;
  role: string;
  email: string;
  phone?: string;
  department?: string;
}

export type ColorFilterType = 'none' | 'client' | 'project';