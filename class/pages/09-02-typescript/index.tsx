
export default function Qqq() {
    // 타입 추론
    let aaa = "안녕하세요"
    // aaa = 3

    // 타입 명시
    let bbb: string = "반갑습니다"

    // 문자 타입(선언과 할당 분리)
    let ccc: string
    ccc = "안녕"
    // ccc = 3

    // 숫자 타입
    let ddd: number = 10
    // ddd = "철수"

    // Boolean 타입
    let eee: boolean = true
    eee = false
    // eee = "false"   // js에서 true로 작동함

    // 배열 타입
    // let fff: number[] = [1, 2, 3, 4, 'a']
    // let ggg: string[] = ['a', 'b', 'c', 10]
    let hhh: (string | number)[] = [1, 2, 3, 'a', 'b', 'c']

    // 객체 타입
    interface IProfile {
        name: string
        age: number | string
        school: string
    }
    const profile: IProfile = {
        name: "james",
        age: 25,
        school: "yonsei"
    }
    profile.age = "8살"

    // 함수 타입 => 어디서 몇번이든 호출 가능하므로 추론 할 수 없음 -> 반드시 타입 명시 필요!!
    const add = (num1: number, num2: number, unit: string) => {
        return num1 + num2 + unit
    }
    const result = add(1000, 2000, "원")

    // any 타입 (js와 동일)
    let qqq: any = "철수"
    qqq = 1

    return <div>asd</div>
}