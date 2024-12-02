import { Department, Resource, Project, Booking } from '../types';

export const sampleDepartments: Department[] = [
  {
    id: 'dept1',
    name: 'Transcode',
    color: '#818cf8',
    description: 'Transcode team'
  },
  {
    id: 'dept2',
    name: 'Sound',
    color: '#34d399',
    description: 'Sound team'
  },
  {
    id: 'dept3',
    name: '3D',
    color: '#fb923c',
    description: '3D team'
  },
  {
    id: 'dept4',
    name: 'Online',
    color: '#f472b6',
    description: 'Online team'
  },
  {
    id: 'dept5',
    name: 'Offline',
    color: '#a78bfa',
    description: 'Offline team'
  },
  {
    id: 'dept6',
    name: 'Motion',
    color: '#60a5fa',
    description: 'Motion team'
  },
  {
    id: 'dept7',
    name: 'Renk',
    color: '#ec4899',
    description: 'Renk departmanı'
  }
];

export const sampleResources: Resource[] = [
  // Transcode Team
  {
    id: 'res1',
    name: 'Ali Yılmaz',
    role: 'Senior Transcode',
    departmentId: 'dept1',
    availability: {
      start: '09:00',
      end: '18:00'
    }
  },
  {
    id: 'res2',
    name: 'Mehmet Demir',
    role: 'Transcode Operator',
    departmentId: 'dept1',
    availability: {
      start: '09:00',
      end: '18:00'
    }
  },
  
  // Sound Team
  {
    id: 'res3',
    name: 'Ayşe Kaya',
    role: 'Sound Designer',
    departmentId: 'dept2',
    availability: {
      start: '09:00',
      end: '18:00'
    }
  },
  {
    id: 'res4',
    name: 'Can Öztürk',
    role: 'Sound Engineer',
    departmentId: 'dept2',
    availability: {
      start: '09:00',
      end: '18:00'
    }
  },

  // 3D Team
  {
    id: 'res5',
    name: 'Zeynep Aksoy',
    role: '3D Artist',
    departmentId: 'dept3',
    availability: {
      start: '09:00',
      end: '18:00'
    }
  },
  {
    id: 'res6',
    name: 'Burak Yıldız',
    role: '3D Animator',
    departmentId: 'dept3',
    availability: {
      start: '09:00',
      end: '18:00'
    }
  },

  // Online Team
  {
    id: 'res7',
    name: 'Deniz Şahin',
    role: 'Online Editor',
    departmentId: 'dept4',
    availability: {
      start: '09:00',
      end: '18:00'
    }
  },
  {
    id: 'res8',
    name: 'Ece Aydın',
    role: 'Colorist',
    departmentId: 'dept4',
    availability: {
      start: '09:00',
      end: '18:00'
    }
  },

  // Offline Team
  {
    id: 'res9',
    name: 'Murat Çelik',
    role: 'Offline Editor',
    departmentId: 'dept5',
    availability: {
      start: '09:00',
      end: '18:00'
    }
  },
  {
    id: 'res10',
    name: 'Selin Arslan',
    role: 'Assistant Editor',
    departmentId: 'dept5',
    availability: {
      start: '09:00',
      end: '18:00'
    }
  },

  // Motion Team
  {
    id: 'res11',
    name: 'Emre Koç',
    role: 'Motion Designer',
    departmentId: 'dept6',
    availability: {
      start: '09:00',
      end: '18:00'
    }
  },
  {
    id: 'res12',
    name: 'Elif Yılmaz',
    role: 'Motion Graphics Artist',
    departmentId: 'dept6',
    availability: {
      start: '09:00',
      end: '18:00'
    }
  },
  {
    id: 'res13',
    name: 'Ahmet Yıldız',
    role: 'Renk Uzmanı',
    departmentId: 'dept7',
    availability: {
      start: '09:00',
      end: '18:00'
    }
  },
  {
    id: 'res14',
    name: 'Ayşe Kara',
    role: 'Kıdemli Renk Uzmanı',
    departmentId: 'dept7',
    availability: {
      start: '09:00',
      end: '18:00'
    }
  }
];

export const sampleProjects: Project[] = [
  {
    id: 'proj1',
    name: 'Film Post Production',
    clientName: 'Cinema Productions',
    color: '#818cf8',
    status: 'active',
    billable: true,
    activityTypes: ['Editing', 'Sound', '3D']
  },
  {
    id: 'proj2',
    name: 'Commercial Campaign',
    clientName: 'Ad Agency',
    color: '#34d399',
    status: 'active',
    billable: true,
    activityTypes: ['Motion', 'Online', 'Sound']
  }
];

export const sampleBookings: Booking[] = [
  {
    id: 'book1',
    resourceId: 'res1',
    projectName: 'Film Post Production',
    startDate: '2024-03-18',
    endDate: '2024-03-18',
    startTime: '09:00',
    endTime: '13:00',
    color: '#818cf8',
    clientName: 'Cinema Productions'
  },
  {
    id: 'book2',
    resourceId: 'res3',
    projectName: 'Commercial Campaign',
    startDate: '2024-03-18',
    endDate: '2024-03-18',
    startTime: '14:00',
    endTime: '17:00',
    color: '#34d399',
    clientName: 'Ad Agency'
  }
];

export const sampleUser = {
  name: 'Admin User',
  email: 'admin@theroots.com',
  avatar: undefined
};

export const sampleClients = [
  {
    id: 'client1',
    name: 'Cinema Productions',
    email: 'contact@cinemaproductions.com',
    phone: '+90 212 555 0101',
    color: '#818cf8',
    description: 'Film ve dizi prodüksiyon şirketi',
    employees: [
      {
        id: 'emp1',
        name: 'Ahmet Yılmaz',
        role: 'Prodüksiyon Müdürü',
        email: 'ahmet@cinemaproductions.com',
        phone: '+90 532 555 0101',
        department: 'Prodüksiyon'
      },
      {
        id: 'emp2',
        name: 'Ayşe Demir',
        role: 'Post Prodüksiyon Süpervizörü',
        email: 'ayse@cinemaproductions.com',
        phone: '+90 533 555 0102',
        department: 'Post Prodüksiyon'
      }
    ]
  },
  {
    id: 'client2',
    name: 'Ad Agency',
    email: 'info@adagency.com',
    phone: '+90 212 555 0202',
    color: '#34d399',
    description: 'Reklam ve pazarlama ajansı',
    employees: [
      {
        id: 'emp3',
        name: 'Mehmet Kaya',
        role: 'Kreatif Direktör',
        email: 'mehmet@adagency.com',
        phone: '+90 532 555 0201',
        department: 'Kreatif'
      }
    ]
  }
];