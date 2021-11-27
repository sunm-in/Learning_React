// 키값 기준으로 쿠키에 저장된 값을 가져오는 함수
const getCookie = (name) => {
    // 쿠키 값 가져오기
    let value = "; " + document.cookie;
    // 키 값 기준으로 파싱하기
    let parts = value.split(`; ${name}=`);
    // value 리턴
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
};

//쿠키에 저장하는 함수                 만료일
const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  // 날짜
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  // 저장
  document.cookie = `${name}=${value}; expries=${date.toUTCString()}`;
};

// 만료일을 예전으로 설정해 쿠키를 지운다.
const deleteCookie = (name) => {
    let date = new Date("2021-01-01").toUTCString();
    console.log(date);

    document.cookie = name + "=; expires" + date;
};

export { getCookie, setCookie, deleteCookie };
