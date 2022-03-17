function solution(str) {  
    let res = str[0]
    let c = 0
    let result = ''

    for (let i = 1; i <= str.length; i++){
        if(res.includes(str[i])) {
            i = c++
            if(res.length > result.length) (
                result = res
            )
            res = str[i]
        }else {
            if (res.length > result.length) {
                result = res
            }
            res += str[i]
        }
    }
    return result.length
}

console.log(solution('abcabcbb'));