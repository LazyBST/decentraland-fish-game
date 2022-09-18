import { Timer } from "../customComponents/fishTimer";
import { PolkaFish } from "../customComponents/polkaFish";

const polkaFish = engine.getComponentGroup(PolkaFish);
export class PolkaBlink implements ISystem {
  update(dt: number) {
    for (let fish of polkaFish.entities) {
      let timer = fish.getComponent(Timer);
      //   let fishProp = fish.getComponent(PolkaFish);
      if (
        (timer.timeLeft > 1.5 && timer.timeLeft <= 2) ||
        (timer.timeLeft > 0.5 && timer.timeLeft <= 1)
      ) {
        fish.getComponent(Transform).scale.set(1.5, 1.5, 1.5);
      } else if (
        (timer.timeLeft > 1 && timer.timeLeft <= 1.5) ||
        (timer.timeLeft > 0 && timer.timeLeft <= 0.5)
      ) {
        fish.getComponent(Transform).scale.set(0.5, 0.5, 0.5);
      } else if (timer.timeLeft <= 0) {
        fish.getComponent(Transform).scale.set(1, 1, 1);
      }
    }
  }
}
