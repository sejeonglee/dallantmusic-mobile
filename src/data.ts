/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
enum LessonType {
  type50 = 'type50',
  type75 = 'type75',
  type100 = 'type100',
  typePostPay = 'typePostPay',
}

const students = [
  {
    id: 1,
    name: '유승헌',
    lessonList: [
      { lessonKey: 1, lessonType: LessonType.type50 },
      { lessonKey: 2, lessonType: LessonType.type100 },
      { lessonKey: 3, lessonType: LessonType.type75 },
      { lessonKey: 4, lessonType: LessonType.type50 },
      { lessonKey: 5, lessonType: LessonType.type50 },
      { lessonKey: 6, lessonType: LessonType.type50 },
      { lessonKey: 7, lessonType: LessonType.type50 },
      { lessonKey: 8, lessonType: LessonType.type50 },
      { lessonKey: 9, lessonType: LessonType.type50 },
      { lessonKey: 10, lessonType: LessonType.type50 },
      { lessonKey: 11, lessonType: LessonType.type50 },
      { lessonKey: 12, lessonType: LessonType.type50 },
    ],
  },
  {
    id: 2,
    name: '남궁승헌',
    lessonList: [
      { lessonKey: 1, lessonType: LessonType.type50 },
      { lessonKey: 2, lessonType: LessonType.type50 },
      { lessonKey: 3, lessonType: LessonType.type50 },
      { lessonKey: 4, lessonType: LessonType.type50 },
    ],
  },
  {
    id: 3,
    name: '홍길동',
    lessonList: [
      { lessonKey: 1, lessonType: LessonType.typePostPay },
      { lessonKey: 2, lessonType: LessonType.typePostPay },
    ],
  },
  {
    id: 4,
    name: '김지수',
    lessonList: [
      { lessonKey: 1, lessonType: LessonType.type75 },
      { lessonKey: 2, lessonType: LessonType.type75 },
      { lessonKey: 3, lessonType: LessonType.type75 },
    ],
  },
  {
    id: 5,
    name: '유지연',
    lessonList: [
      { lessonKey: 1, lessonType: LessonType.type100 },
      { lessonKey: 2, lessonType: LessonType.type100 },
    ],
  },
  {
    id: 6,
    name: '박정남',
    lessonList: [
      { lessonKey: 1, lessonType: LessonType.typePostPay },
      { lessonKey: 2, lessonType: LessonType.type50 },
    ],
  },
];

type StudentInfoDictType = {
  [index: string]: StudentInfoType;
};

export type StudentInfoType = {
  name?: string;
  phone_number?: string;
  level?: string;
  purpose?: string;
};
const studentinfo: StudentInfoDictType = {
  '17': {
    name: '유승헌',
    phone_number: '010-4650-8532',
    level: '전공 중,고,재수생',
    purpose: '해외 대학원 입학',
  },
};

export function getStudents() {
  return students;
}

export type Lesson = {
  lessonType: LessonType;
  lessonKey: number;
};

export function getStudentInfo(studentKey: number): object {
  return studentinfo[studentKey];
}
