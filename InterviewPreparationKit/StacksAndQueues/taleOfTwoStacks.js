/* A queue is an abstract data type that maintains the order in which elements 
were added to it, allowing the oldest elements to be removed from the front and 
new elements to be added to the rear. This is called a First-In-First-Out (FIFO) 
data structure because the first element added to the queue (i.e., the one that 
has been waiting the longest) is always the first one to be removed.

A basic queue has the following operations:

Enqueue: add a new element to the end of the queue.
Dequeue: remove the element from the front of the queue and return it.

In this challenge, you must first implement a queue using two stacks. Then process 
q queries, where each query is one of the following 3 types:

1 x: Enqueue element x into the end of the queue.
2: Dequeue the element at the front of the queue.
3: Print the element at the front of the queue.

For example, a series of queries might be as follows:

Query | LIFO     | FIFO     | Output |
1 35  | {35}     | {35}     |        |
1 15  | {35, 15} | {15, 35} |        |
3     |          |          |  35    |
2     | {15}     | {15}     |        |
3     |          |          |  15    |

Function Description
Complete the put, pop, and peek methods in the editor below. 
They must perform the actions as described above.

Input Format
The first line contains a single integer, q, the number of queries.

Each of the next q lines contains a single query in the form described in the 
problem statement above. All queries start with an integer denoting the 
query type, but only query 1 is followed by an additional space-separated value, x, 
denoting the value to be enqueued.

Constraints
1 <= q <= 10^5
1 <= type <= 3
1 <= |x| <= 10^9
It is guaranteed that a valid answer always exists for each query of types 2 and 3.

Output Format
For each query of type 3, return the value of the element at the front of the fifo 
queue on a new line.

Sample Input
10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2

Sample Output
14
14

Explanation

Query | FIFO            | LIFO              | Output |
1 42  | {42}            | {42}              |        |
2     | {}              | {}                |        |
1 14  | {14}            | {14}              |        |
3     |                 |                   |    14  |
1 28  | {14,28}         | {28,14}           |        |
3     |                 |                   |    14  |
1 60  | {14,28,60}      | {60,28,14}        |        |
1 78  | {14,28,60,78}   | {78,60,28,14}     |        |
2     | {28,60,78}      | {78,60,28}        |        |
2     | {60,78}         | {78,60}           |        |
*/


class Queue {
    constructor() {
        this.s1 = []
        this.s2 = []
    }
    enqueue(val) {
        this.s2.push(val)
    }
    //rather than shift back between stacks
    //we can hold items in s1 because they are in correct order
    //we only take items out of the second stack when s1 is empty
    dequeue() {
        let item
        if (!this.s1.length) {
            while (this.s2.length) {
                this.s1.push(this.s2.pop())
            }
        }
        item = this.s1.pop()
        return item
    }
    //to peek at a value when there is nothing in s1, we take the first item is s2
    //else we look at the last item in stack1 which is our dequeue stack these changes improve run-time
    print() {
        if (!this.s1.length) return this.s2[0]
        return this.s1[this.s1.length - 1]
    }
}
const processData = (input) => {


    const myQueue = new Queue()
    let result = ''

    // const inputArr = input.match(/[^\r\n]+/g)  this line is for input from the website

    for (let q of input) {
        let arr = q.split(' ')
        if (arr[0] == 1) {
            myQueue.enqueue(arr[1])
        }
        if (arr[0] == 2) myQueue.dequeue()
        if (arr[0] == 3) result += myQueue.print() + '\n'
    }
    console.log(myQueue);
    return console.log(result.toString())
}



const q = [
    '1 42',
    '2',
    '1 14',
    '3',
    '1 28',
    '3',
    '1 60',
    '1 78',
    '2',
    '2',
]

const q1 = [
    '8',
    '1 15',
    '1 17',
    '3',
    '1 25',
    '2',
    '3',
    '2',
    '3',
]

processData(q)
processData(q1)

/* worse run time bc of dequeue and print
class Queue {
    constructor() {
        this.s1 = []
        this.s2 = []
    }
    enqueue(val) {
        this.s2.push(val)
    }
    dequeue() {
        while (this.s2.length) {
            this.s1.push(this.s2.pop())
        }
        let item = this.s1.pop()
        while (this.s1.length) {
            this.s2.push(this.s1.pop())
        }
        return item
    }
    print() {
        return this.s2[0]
    }
}

*/


/* code to make it work on website
function processData(input) {
    //Enter your code here
    class Queue {
        constructor() {
            this.s1 = []
            this.s2 = []
        }
        enqueue(val) {
            this.s2.push(val)
        }
        dequeue() {
            let item
            if (!this.s1.length) {
                while (this.s2.length) {
                    this.s1.push(this.s2.pop())
                }
            }
            item = this.s1.pop()
            return item
        }
        print() {
            if (!this.s1.length) return this.s2[0]
            return this.s1[this.s1.length - 1]
        }
    }


    const myQueue = new Queue()
    let result = ''

    const inputArr = input.match(/[^\r\n]+/g) //here is the change

    //as well as the input
    for (let q of inputArr) {
        let arr = q.split(' ')
        if (arr[0] == 1) {
            myQueue.enqueue(arr[1])
        }
        if (arr[0] == 2) myQueue.dequeue()
        if (arr[0] == 3) result += myQueue.print() + '\n'
    }

    return console.log(result.toString())
}
*/