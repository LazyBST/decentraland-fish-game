@Component("speedAndJump")
export class SpeedAndJump {
  speed: number;
  jumpHeight: number;
  constructor(speed: number, jumpHeight: number) {
    this.speed = speed;
    this.jumpHeight = jumpHeight;
  }
}
