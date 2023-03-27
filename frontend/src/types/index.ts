export interface Lead {
  id: number;
  name: string;
  responsible_user_id: number;
  created_at: string;
  price: number;
  status_id: number;
  pipeline_id: number;
}

export interface Pipeline {
  id: number;
  name: string;
  _embedded: {
    statuses: Status[];
  };
}

export interface Status {
  id: number;
  name: string;
  pipeline_id: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  lang: string;
  rights: any;
}

export interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  avatar?: string;
  _embedded: {
    leads: { id: number }[];
  };
}


export interface LeadsTableProps {
  leads: Lead[];
  pipelines: Pipeline[];
  users: User[];
}

export interface ApiResponse {
  _page: number;
  _links: {
    self: {
      href: string;
    };
  };
  _embedded: {
    leads: Lead[];
  };
}

export interface PipelinesApiResponse {
  _total_items: number;
  _links: {
    self: {
      href: string;
    };
  };
  _embedded: {
    pipelines: Pipeline[];
  };
}

export interface UserApiResponse {
  _total_items: number;
  _page: number;
  _page_count: number;
  _links: any;
  _embedded: {
    users: User[];
  };
}

export interface ContactsApiResponse {
  _total_items: number;
  _links: {
    self: {
      href: string;
    };
  };
  _embedded: {
    contacts: Contact[];
  };
}

export interface SearchBarProps {
  onSearch: (query?: string) => void;
}
