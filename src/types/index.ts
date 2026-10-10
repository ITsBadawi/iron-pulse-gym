export interface Program {
  id: string;
  titleAr: string;
  titleEn: string;
  tagline: string;
  description: string;
  intensity: number; // 1-100
  duration: string;
  caloriesBurn: string;
  image: string;
  features: string[];
  schedulePreview: string;
  targetGoal: string;
}

export interface Trainer {
  id: string;
  nameAr: string;
  nameEn: string;
  roleAr: string;
  experience: string;
  certificates: string[];
  specialty: string;
  quote: string;
  image: string;
  instagram: string;
}

export interface ScheduleClass {
  id: string;
  time: string;
  titleAr: string;
  titleEn: string;
  category: 'iron' | 'crossfit' | 'boxing' | 'mobility' | 'hiit';
  trainer: string;
  room: string;
  intensity: string;
  duration: string;
}

export interface DaySchedule {
  dayNameAr: string;
  dayNameEn: string;
  classes: ScheduleClass[];
}

export interface MembershipPlan {
  id: string;
  nameAr: string;
  nameEn: string;
  periodAr: string;
  price: number;
  originalPrice?: number;
  popular?: boolean;
  savingsBadge?: string;
  features: string[];
  whatsAppText: string;
}

export interface TransformationStory {
  id: string;
  name: string;
  age: number;
  duration: string;
  beforeImage: string;
  afterImage: string;
  weightDiff: string;
  fatDiff: string;
  muscleDiff: string;
  story: string;
  program: string;
}
