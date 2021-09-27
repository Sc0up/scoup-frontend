/**
 * params: start-date, end-date
 * YYYY-MM-DD 형태
 */
export const getScheduleData = () => {
  // api 요청 보낼 것임
  // 세 달치를 한 번에? 아니면 한 달씩 쪼개서? 아직 모르겠음..
  const data =
    //이거 타입 지정... 끔찍하다
    {
      '2021-09-25': [
        {
          start_time: '2021-09-25T10:00',
          end_time: '2021-09-27T10:00',
          isCandidate: false,
          id: 1,
          title: '회의하기',
          description: 'hello',
          colorcode: '#ffd4d1',
        },
        {
          start_time: '2021-09-25T14:00',
          end_time: '2021-09-25T16:00',
          isCandidate: false,
          id: 2,
          title: '과제',
          description: '과제를 합니다.',
          colorcode: '#ffbc63',
        },
      ],

      '2021-09-26': [
        {
          start_time: '2021-09-26T10:00',
          end_time: '2021-09-26T10:00',
          isCandidate: true,
          id: 3,
          title: '후보인 것',
          description: '이거슨 후보',
          colorcode: '#bcbaff',
        },
      ],
    };

  return data;
};
