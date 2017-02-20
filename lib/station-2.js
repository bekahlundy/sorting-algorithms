module.exports = {
  formatEmails(arr) {
    var str =  arr.toString();
    var lower = str.toLowerCase();
    var answer = lower.split(",")
    console.log(answer)
    return answer;
  }
}
