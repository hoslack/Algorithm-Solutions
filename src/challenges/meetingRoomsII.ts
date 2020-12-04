// Given an array of meeting time intervals consisting of start and end times, [[s1, e1], [s2, e2], ....]
// (si<ei), find the number of conference rooms required.

// E.g
// Input: [[0, 30], [5, 10], [15, 20]]
// Output: 2


// Input: [[7, 10], [2, 4]]
// Output: 1

const meetingRoomsII = (intervals: Array<number>[]): number => {
    if(intervals.length<2) return intervals.length
    intervals.sort((a, b) => a[0] - b[0])
    let roomTime = [intervals[0][1]]
    for(let i = 1; i<intervals.length; i++){
        let [start, end] = [...intervals[i]]
        let earliest = Math.min(...roomTime)
        if(start < earliest){
            roomTime.push(end)
        }else{
            roomTime[roomTime.indexOf(earliest)] = end
        }
    }
    return roomTime.length
}

export default meetingRoomsII
