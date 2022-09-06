import { FISH_CONSTANTS } from "../common/constants";
import { Timer } from "../customComponents/fishTimer";
import { SpeedAndJump } from "../customComponents/fishComponents";
import {
  getRandomJump,
  getRandomSpeed,
  getRandomFishInitialPositions,
} from "../common/utils";
import { Score } from "../customComponents/score";

const fishEntities: Entity[] = [];

function createFishPool(
  _scene: Entity,
  engine: Engine,
  gameScore: Score,
  scoreText: UIText
) {
  for (let i = 0; i < FISH_CONSTANTS.POOL_SIZE; i++) {
    const { x, y, z } = getRandomFishInitialPositions();
    // console.log("Initial Position: ", x, y, z);
    fishEntities[i] = new Entity("exoticFish");
    fishEntities[i].setParent(_scene);
    const transform215 = new Transform({
      position: new Vector3(x, y, z),
      rotation: new Quaternion(1, -1, 1, 1),
      scale: new Vector3(1, 1, 1),
    });
    fishEntities[i].addComponentOrReplace(transform215);
    const gltfShape7 = new GLTFShape(
      "3c68ce69-6066-4b58-9417-f930fb8bb17d/Fish_04/Fish_04.glb"
    );
    gltfShape7.withCollisions = true;
    gltfShape7.isPointerBlocker = true;
    gltfShape7.visible = true;
    fishEntities[i].addComponentOrReplace(gltfShape7);
    fishEntities[i].addComponentOrReplace(
      new Timer(FISH_CONSTANTS.TIMER_LENGTH)
    );
    fishEntities[i].addComponentOrReplace(
      new SpeedAndJump(getRandomSpeed(), getRandomJump())
    );
    fishEntities[i].addComponent(
      new OnPointerDown((e) => {
        if (e?.hit?.entityId) {
          // update fish position
          const { x, y, z } = getRandomFishInitialPositions();
          const transform215 = new Transform({
            position: new Vector3(x, y, z),
            rotation: new Quaternion(1, -1, 1, 1),
            scale: new Vector3(1, 1, 1),
          });
          engine.entities[e.hit.entityId].addComponentOrReplace(transform215);
          engine.entities[e.hit.entityId].addComponentOrReplace(
            new Timer(FISH_CONSTANTS.TIMER_LENGTH)
          );
          engine.entities[e.hit.entityId].addComponentOrReplace(
            new SpeedAndJump(getRandomSpeed(), getRandomJump())
          );

          // update score
          gameScore.score++;
          scoreText.value = "Score: " + gameScore.score++;
        }
      })
    );
    engine.addEntity(fishEntities[i]);
  }
}

export { fishEntities, createFishPool };
