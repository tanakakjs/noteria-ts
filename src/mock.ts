import { Note } from './store/types';

export const mockNotes: Note[] = [
  {
    id: 'note_id_1',
    title: 'note_title_1',
    tags: ['Programing', 'Life'],
    body: 'note_body_1',
  },
  {
    id: 'note_id_2',
    title: 'note_title_2',
    tags: ['Vue.js', 'TypeScript'],
    body: 'note_body_2',
  },
];

export const mockTags: string[] = [
  'Programing',
  'Vue.js',
  'Life',
  'TypeScript',
];
