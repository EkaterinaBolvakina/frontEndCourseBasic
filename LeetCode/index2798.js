/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0;
    for (let index = 0; index < hours.length; index++) {
        const element = hours[index];
        if (element >= target) {
            count++;
        }
    };
    return count;
};

const hours = [0,1,2,3,4];
const target = 22;
console.log(numberOfEmployeesWhoMetTarget(hours,target));