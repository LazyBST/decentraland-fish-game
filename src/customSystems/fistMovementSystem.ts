import { Timer } from "../customComponents/fishTimer";
import { SpeedAndJump } from "../customComponents/fishComponents";

const parcelsCountX = 3;
const parcelsCountZ = 3;
const boundarySizeZMin = 2;
const boundarySizeZMax = parcelsCountZ * 16 - 2;
const timers = engine.getComponentGroup(Timer);
export class SwimJumpMove implements ISystem {
  update(dt: number) {
    for (let fish of timers.entities) {
      let transformFish = fish.getComponent(Transform);
      let moveDirection;
      let timer = fish.getComponent(Timer);
      let fishProp = fish.getComponent(SpeedAndJump);
      // console.log("timeleft ", fishProp);
      if (timer.timeLeft > 1 && timer.timeLeft <= 2) {
        moveDirection = new Vector3(0, fishProp.jumpHeight, fishProp.speed);
        // console.log("timeleft 1 ", timer.timeLeft);
        timer.timeLeft -= dt;
      } else if (timer.timeLeft > 0 && timer.timeLeft <= 1) {
        moveDirection = new Vector3(
          0,
          -1 * fishProp.jumpHeight,
          fishProp.speed
        );
        // console.log("timeleft 2 ", timer.timeLeft);
        timer.timeLeft -= dt;
      } else if (timer.timeLeft <= 0) {
        moveDirection = new Vector3(0, 0, fishProp.speed);
        timer.timeLeft = timer.totalTime;
        // console.log("timeleft 3 ", timer.timeLeft);
      } // else {
      //   moveDirection = new Vector3(0, 0, 3);
      //   timer.timeLeft++;
      // }
      moveDirection = moveDirection
        ?.normalize()
        ?.multiplyByFloats(2 * dt, 2 * dt, 2 * dt);
      let nextPosition = transformFish.position.add(moveDirection);
      if (
        nextPosition.z > boundarySizeZMax ||
        nextPosition.z < boundarySizeZMin
      ) {
        nextPosition.z = 2;
      }

      transformFish.position.copyFrom(nextPosition);
    }
  }
}

// SwimJumpMove.bind = () => {};

// engine.addSystem(new SwimJumpMove());
