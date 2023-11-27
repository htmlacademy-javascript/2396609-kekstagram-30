import '.util.js';
import { PHOTO_COUNT, createPhoto } from './data.js';

Array.from({length: PHOTO_COUNT}, createPhoto);
