/**
 * 1.   blue color for "pragraph 2" and "paragraph 3"
 *      beige background for "paragraph 2"
 */
/**
 * 2.   <h2> Mailing Address </h2>
 *      <address>
 *          6410 Via Real <br />
 *          Carpinteria, CA 93013 <br />
 *          <a href="mailto:info@linkedin.com">info@linkedin.com</a>.
 *      </address>
 */

/**
 * 3
 */
function areAnagram(str1, str2) {
    for (let i of str1) {
        if (str2.split(i).length != str1.split(i).length) {
            return false;
        }
    }
    return true;
}

console.log(areAnagram("listeen", "silente"))

/**
 * 4
 */
function calculateMean(list) {
    return list.reduce((x, y) => x + y, 0) / list.length
}
console.log(calculateMean([1, 2, 3, 4, 5]))

/**
 * 5
 */
function checkSeason(month) {
    if (['September', 'October', 'November'].includes(month)) {
        return "Autumn"
    }

    if (['December', 'January', 'February'].includes(month)) {
        return "Winter"
    }

    if (['March', 'April', 'May'].includes(month)) {
        return "Spring"
    }

    if (['June', 'July', 'August'].includes(month)) {
        return "Summer"
    }
}

console.log(checkSeason('May'))

/**
 * 6
 */
function factorial(x) {
    return x == 1 ? 1 : x * factorial(x - 1)
}

console.log(factorial(5))

/**
 * 7
 */
function Duplicate(list) {
    return list.concat([...list])
}

console.log(Duplicate([1, 2, 3, 4]))

/**
 * 8.   Set length to zero
 */

