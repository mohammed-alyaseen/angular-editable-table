export interface User {
  isSelected: boolean;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  isEdit: boolean;
}

export const UserColumns = [
  {
    key: 'firstName',
    type: 'text',
    label: 'First Name',
    required: true,
  },
  {
    key: 'lastName',
    type: 'text',
    label: 'Last Name',
  },
  {
    key: 'email',
    type: 'email',
    label: 'Email',
    required: true,
    pattern: '.+@.+',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];
