// Given an array of meeting time intervals consisting of start and end times, [[s1, e1], [s2, e2], ....]
// (si<ei), determine if a person could attend all meetings.

// E.g
// Input: [[0, 30], [5, 10], [15, 20]]
// Output: false

const meetingRooms = (intervals: Array<number>[]): boolean => {
    if(intervals.length<2) return true
    intervals.sort((a, b) => a[0] - b[0])
    let end = intervals[0][1]
    for(let i = 1; i<intervals.length; i++){
        if(end>intervals[i][0]) return false;
        if(end<intervals[i][1]) end = intervals[i][1];
    }
    return true
}

export default meetingRooms
