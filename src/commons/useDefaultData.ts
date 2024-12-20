export function useDefaultData() {
  const menus: Menu[] = [
    { id: 'com', to: '/company', name: 'COMPANY' },
    {
      id: 'bus',
      to: '/business/si',
      name: 'BUSINESS',
      children: [
        { id: 'bus-si', to: '/business/si', name: 'SI/SM' },
        { id: 'bus-sol', to: '/business/solution', name: 'Solution' },
        { id: 'bus-edu', to: '/business/edu', name: 'IT교육사업' },
      ],
    },
    { id: 'work', to: '/work', name: 'WORK' },
    { id: 'rec', to: '/recruit', name: 'RECRUIT' },
    { id: 'con', to: '/contact', name: 'CONTACT', midName: 'CONTACT US' },
  ];

  const company: Company = {
    name: '이트리소프트',
    bizNo: '115-86-01998',
    address: '서울특별시 성동구 성수일로 89, 605호(성수동1가, 메타모르포)',
    telephone: '02-2124-2025',
    fax: '02-2124-2025',
    email: 'etree_admin@etreesoft.com',
  };

  const works: WorkContents[] = [
    {
      orderCom: '이지자산평가',
      pjtName: '대외 정보제공 시스템 구축',
      period: '2024.06 ~ 2024.10',
      assign: '기업자산 평가 정보를 대외고객에게 서비스',
      entryType: '수행사',
      status: '수행완료',
    },
    {
      orderCom: '재정정보원',
      pjtName: 'E-나라도움 시스템 기능 개선 개발',
      period: '2024.05 ~ 2024.10',
      assign: 'E-나라도움 시스템 기능 개선 개발',
      entryType: '전문업체',
      status: '수행완료',
    },
    {
      orderCom: '티오더',
      pjtName: '티오더 CDP 법인분리 시스템 구축',
      period: '2024.01 ~ 2024.05',
      assign: '고객관리 플랫폼의 대외 고객에게 서비스',
      entryType: '수행사',
      status: '수행완료',
    },
    {
      orderCom: 'NH농협투자증권',
      pjtName: 'WM 디지털 사업 웹서비스 운영,개발',
      period: '2024.01 ~ 현재',
      assign: 'NH농협투자증권의 웹서비스 운영',
      entryType: '수행사',
      status: '수행중',
    },
    {
      orderCom: 'NH농협투자증권',
      pjtName: 'TAX Advisory 플랫폼 구축',
      period: '2023.08 ~ 2024.01',
      assign: 'TAX Advisory 플랫폼 구축',
      entryType: '수행사',
      status: '수행완료',
    },
    {
      orderCom: '경기도마을버스조합',
      pjtName: '경기도마을버스 교통카드시스템 구축',
      period: '2023.04 ~ 2023.12',
      assign: '경기도마을버스 교통카드시스템 구축',
      entryType: '수행사',
      status: '수행완료',
    },
    {
      orderCom: '롯데카드',
      pjtName: '롯데카드 신분증진위여부 시스템 구축',
      period: '2023.08 ~ 2023.12',
      assign: '롯데카드 신분증진위여부 시스템 구축',
      entryType: '수행사',
      status: '수행완료',
    },
    {
      orderCom: '롯데카드',
      pjtName: '롯데카드 전환대출 시스템 구축',
      period: '2023.02 ~ 2023.08',
      assign: '롯데카드 신용대출 전환 자동화 서비스',
      entryType: '수행사',
      status: '수행완료',
    },
    {
      orderCom: '메리츠증권',
      pjtName: '메리츠증권 MTS 운영,개발',
      period: '2023.02 ~ 2023.12',
      assign: '메리츠증권 MTS 운영,개발',
      entryType: '전문업체',
      status: '수행완료',
    },
    {
      orderCom: '현대기아자동차',
      pjtName: '현대기아자동차 중고차 쇼핑몰 구축',
      period: '2022.11 ~ 2023.03',
      assign: '중고차 쇼핑몰 프로트엔드 구축',
      entryType: '전문업체',
      status: '수행완료',
    },
    {
      orderCom: '롯데카드',
      pjtName: '롯데카드 로카모빌리티 연계시스템 구축',
      period: '2022.03 ~ 2023.01',
      assign: '로카모빌리티 서비스 통합앱 구축',
      entryType: '수행사',
      status: '수행완료',
    },
    {
      orderCom: '쇼핑엔티',
      pjtName: '온라인 쇼핑몰 재구축',
      period: '2021.10 ~ 2022.09',
      assign: '온라인 쇼핑몰 재구축',
      entryType: '전문업체',
      status: '수행완료',
    },
    {
      orderCom: 'LF몰',
      pjtName: 'LF몰 쇼핑몰 재구축',
      period: '2021.12 ~ 2022.03',
      assign: '온라인 쇼핑몰 재구축',
      entryType: '전문업체',
      status: '수행완료',
    },
    {
      orderCom: '롯데카드',
      pjtName: '디지털 ARS 시스템 개선사업',
      period: '2021.10 ~ 2022.02',
      assign: '디지털 ARS 시스템 개선사업',
      entryType: '수행사',
      status: '수행완료',
    },
    {
      orderCom: '핀테크',
      pjtName: '마이데이터 서비스 구축',
      period: '2021.10 ~ 2022.04',
      assign: '마이데이터 서비스 구축',
      entryType: '수행사',
      status: '수행완료',
    },
    {
      orderCom: '국정원',
      pjtName: '위협요소관리 시스템 개선',
      period: '2021.10 ~ 2021.12',
      assign: '위협요소관리 시스템 개선',
      entryType: '전문업체',
      status: '수행완료',
    },
    {
      orderCom: '삼성에스원',
      pjtName: '터키보안포탈 시스템 구축',
      period: '2021.08 ~ 2021.11',
      assign: '터키보안보탈 시스템 구축',
      entryType: '전문업체',
      status: '수행완료',
    },
    {
      orderCom: '리치앤코',
      pjtName: '리치앤코 코어시스템 차세대 구축',
      period: '2020.10 ~ 2021.11',
      assign: '영업관리 차세대 시스템 구축',
      entryType: '수행사',
      status: '수행완료',
    },
    {
      orderCom: '리치앤코',
      pjtName: '애드알바 글로벌 시스템 구축',
      period: '2020.04 ~ 2021.05',
      assign: '애드알바 글로벌 시스템 구축',
      entryType: '수행사',
      status: '수행완료',
    },
    {
      orderCom: '리치앤코',
      pjtName: 'MA운영팀 운영,개발',
      period: '2020.03 ~ 2021.03',
      assign: 'MA운영팀 시스템 유지보수',
      entryType: '수행사',
      status: '수행완료',
    },
    {
      orderCom: '롯데온',
      pjtName: '롯데 통합EC 구축 및 운영',
      period: '2020.08 ~ 2021.01',
      assign: '롯데 통합EC 구축 및 운영',
      entryType: '전문업체',
      status: '수행완료',
    },
    {
      orderCom: '홈플러스',
      pjtName: '온라인 플랫폼 리뉴얼',
      period: '2020.02 ~ 2021.02',
      assign: '온라인 플랫폼 리뉴얼',
      entryType: '전문업체',
      status: '수행완료',
    },
    {
      orderCom: '롯데면세점',
      pjtName: '롯데면세점 온라인몰 운영,개발',
      period: '2020.09 ~ 2021.12',
      assign: '롯데면세점 온라인몰 운영,개발',
      entryType: '전문업체',
      status: '수행완료',
    },
    {
      orderCom: '삼성카드',
      pjtName: '커뮤니티앱 시스템 운영,개발',
      period: '2020.09 ~ 2021.08',
      assign: '커뮤니티앱 시스템 운영,개발',
      entryType: '전문업체',
      status: '수행완료',
    },
    {
      orderCom: '삼성서울병원',
      pjtName: '삼성서울병원 시스템 운영,개발',
      period: '2020.09 ~ 2021.06',
      assign: '삼성서울병원 시스템 운영,개발',
      entryType: '전문업체',
      status: '수행완료',
    },
    {
      orderCom: '현대오토에버',
      pjtName: '쇼핑몰 운영',
      period: '2020.12 ~ 2023.03',
      assign: '쇼핑몰 운영,개발',
      entryType: '전문업체',
      status: '수행완료',
    },
    {
      orderCom: '삼성증권',
      pjtName: '삼성증권 팝터치 운영',
      period: '2020.09 ~ 2022.12',
      assign: '삼성증권 팝터치 운영,개발',
      entryType: '전문업체',
      status: '수행완료',
    },
  ];

  return { menus, company, works };
}
