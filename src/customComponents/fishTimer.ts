@Component("timer")
export class Timer {
  totalTime: number;
  timeLeft: number;
  constructor(time: number) {
    this.totalTime = time;
    this.timeLeft = time;
  }
}
