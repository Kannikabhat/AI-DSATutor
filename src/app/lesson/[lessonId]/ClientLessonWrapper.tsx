'use client';

import dynamic from 'next/dynamic';
import { Lesson } from '../../../types/lesson';

const LessonPage = dynamic(() => import('../../../components/ui/LessonPage'), {
  ssr: false,
});

interface Props {
  lesson: Lesson;
}

export default function ClientLessonWrapper({ lesson }: Props) {
  return <LessonPage lesson={lesson} />;
}
