import { FISH_CONSTANTS, STORY_LINE_TEXTS } from "../common/constants";
import { Timer } from "../customComponents/fishTimer";
import { PolkaFish } from "../customComponents/polkaFish";
import { SpeedAndJump } from "../customComponents/fishComponents";
import {
  getRandomJump,
  getRandomSpeed,
  getRandomFishInitialPositions,
} from "../common/utils";
import { Score } from "../customComponents/score";
import { Level } from "../customComponents/level";
import { setTimeout } from "../common/timer";
import { getUserData } from "@decentraland/Identity";

const fishEntities: Entity[] = [];

function createFishPool(
  _scene: Entity,
  engine: Engine,
  gameScore: Score,
  scoreText: UIText,
  storyBoard: UIContainerRect,
  storyBoardText: UIText,
  curLevel: Level,
  storyBoardHeading: UIText,
  polkaDotBoard: UIContainerRect,
  greetBoard: UIContainerRect,
  greetBoardText: UIText
) {
  let toShowInstructions = true;
  let userPublicKey;
  for (let i = 0; i < FISH_CONSTANTS.POOL_SIZE + 1; i++) {
    const { x, y, z } = getRandomFishInitialPositions();
    let gltfShape7;
    if (i === FISH_CONSTANTS.POOL_SIZE / 2 + 2) {
      fishEntities[i] = new Entity("redFish");
      fishEntities[i].addComponent(new PolkaFish());

      gltfShape7 = new GLTFShape(
        "7b804637-e9d5-4a4b-a028-265e162453b2/Fish_02/Fish_02.glb"
      );
    } else {
      fishEntities[i] = new Entity("exoticFish");
      gltfShape7 = new GLTFShape(
        "3c68ce69-6066-4b58-9417-f930fb8bb17d/Fish_04/Fish_04.glb"
      );
    }
    fishEntities[i].setParent(_scene);
    const transform215 = new Transform({
      position: new Vector3(x, y, z),
      rotation: new Quaternion(1, -1, 1, 1),
      scale: new Vector3(1, 1, 1),
    });
    fishEntities[i].addComponentOrReplace(transform215);
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
          const curEntity = engine.entities[e.hit.entityId];
          const { x, y, z } = getRandomFishInitialPositions();
          const transform215 = new Transform({
            position: new Vector3(x, y, z),
            rotation: new Quaternion(1, -1, 1, 1),
            scale: new Vector3(1, 1, 1),
          });
          curEntity.addComponentOrReplace(transform215);
          curEntity.addComponentOrReplace(
            new Timer(FISH_CONSTANTS.TIMER_LENGTH)
          );
          curEntity.addComponentOrReplace(
            new SpeedAndJump(getRandomSpeed(), getRandomJump())
          );

          // update score
          if (curEntity.getComponentOrNull(PolkaFish)) {
            polkaDotBoard.visible = true;
            gameScore.score += 5;
            setTimeout(8000, () => {
              polkaDotBoard.visible = false;
            });
          } else {
            gameScore.score++;
          }
          scoreText.value = "Score: " + gameScore.score;

          // // save user
          // if (!userPublicKey) {
          //   executeTask(async () => {
          //     let data = await getUserData();

          //     saveUserData(data);
          //     log(data);
          //     userPublicKey = data.publicKey;
          //   });
          // }

          // //save score
          // executeTask(async () => {
          //   let data = {
          //     userPublicKey: userPublicKey,
          //     score: gameScore.score,
          //   };
          //   saveUserScore(data);
          //   log(data);
          // });

          //TODO: move constants to common/constants
          if (
            (gameScore.score == 1 || gameScore.score == 5) &&
            toShowInstructions
          ) {
            // show instructinos
            greetBoard.color = Color4.Teal();
            greetBoardText.value =
              "Every fish carry 1 point and there is one Polka fist which carry 5 points.\n\n Reach 100 points to win an NFT!!";
            setTimeout(11000, () => {
              greetBoard.visible = false;
            });
            toShowInstructions = false;
          } else if (gameScore.score >= 100) {
            // end text
            setTimeout(8000, () => {
              greetBoard.color = Color4.Blue();
              greetBoardText.value =
                "Congrats you won!!\n\nHope you understand our mission and would support us.\n\nHere is your NFT.";
              greetBoard.visible = true;
              while (fishEntities.length > 0) {
                const lastFish = fishEntities[fishEntities.length - 1];
                engine.removeEntity(lastFish);
                fishEntities.pop();
              }
            });
          }

          // show storyline after every 10 scrores
          if (Math.floor(gameScore.score / 10) > curLevel.level) {
            storyBoardText.value = STORY_LINE_TEXTS[curLevel.level];
            storyBoardHeading.value = "Story Line #" + (curLevel.level + 1);
            storyBoard.visible = true;

            setTimeout(8000, () => {
              storyBoard.visible = false;
              storyBoardText.value = "";
            });

            if (curLevel.level + 1 <= 9) curLevel.level++;
            if (fishEntities.length > 2) {
              const lastFish = fishEntities[fishEntities.length - 1];
              engine.removeEntity(lastFish);
              fishEntities.pop();
            }
          }
        }
      })
    );
    engine.addEntity(fishEntities[i]);
  }
}

export { fishEntities, createFishPool };
