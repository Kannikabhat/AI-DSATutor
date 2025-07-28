import { notFound } from 'next/navigation';
import { lessonsById } from '../../../lesson_content';
import ClientLessonWrapper from './ClientLessonWrapper';

interface LessonPageProps {
  params: {
    lessonId: string;
  };
}

const Page = ({ params }: LessonPageProps) => {
  const lesson = lessonsById[params.lessonId];
  if (!lesson) return notFound();

  return <ClientLessonWrapper lesson={lesson} />;
};

export default Page;
