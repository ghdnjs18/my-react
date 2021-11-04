function generateRandomId(n) {
    // n크기의 배열을 0으로 초기화하여 객체를 생성한다.
    const nums = new Array(n).fill(0)
    // 객체들을 순회하면서 0~9까지의 수를 랜덤 부여된것을 가져온다.
    // floor() 버림함수 / join() 선택수들을 합친다.
    return nums.map(n => Math.floor(Math.random()*10)).join('')
}

function generateRandomString(n) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const str = new Array(n).fill('a')
    return str.map(n => alphabet[Math.floor(Math.random()*alphabet.length)]).join('')
}

// 서버에서 가져오는 JSON 문자열 데이터
const dummyDate = [
    {
        videoId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription: generateRandomString(100),
        videoAuthor: generateRandomString(6)
    },
    {
        videoId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription: generateRandomString(100),
        videoAuthor: generateRandomString(6)
    },
    {
        videoId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription: generateRandomString(100),
        videoAuthor: generateRandomString(6)
    },
    {
        videoId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription: generateRandomString(100),
        videoAuthor: generateRandomString(6)
    },
    {
        videoId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription: generateRandomString(100)
    }
]

export default dummyDate