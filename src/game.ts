import { createFishPool } from "./entities/fishPool";
import { SwimJumpMove } from "./customSystems/fistMovementSystem";
import { PolkaBlink } from "./customSystems/polkaSystem";
import { setTimeout } from "./common/timer";
import { Score } from "./customComponents/score";
import { Level } from "./customComponents/level";
import { nftEntity } from "./entities/nftEntity";

const _scene = new Entity("_scene");
engine.addEntity(_scene);
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
_scene.addComponentOrReplace(transform);

const brownMountain = new Entity("brownMountain");
engine.addEntity(brownMountain);
brownMountain.setParent(_scene);
const transform2 = new Transform({
  position: new Vector3(2.5, 0, 4),
  rotation: new Quaternion(
    2.8253027477639523e-15,
    0.7071067094802856,
    -8.429368136830817e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(0.49999895691871643, 2.25, 0.3824974000453949),
});
brownMountain.addComponentOrReplace(transform2);
const gltfShape = new GLTFShape(
  "0518b1b2-38ab-4fdb-bba6-35a771d7da61/Mountain_02/Mountain_02.glb"
);
gltfShape.withCollisions = true;
gltfShape.isPointerBlocker = true;
gltfShape.visible = true;
brownMountain.addComponentOrReplace(gltfShape);

const brownMountain2 = new Entity("brownMountain2");
engine.addEntity(brownMountain2);
brownMountain2.setParent(_scene);
brownMountain2.addComponentOrReplace(gltfShape);
const transform3 = new Transform({
  position: new Vector3(2.5, 0, 11),
  rotation: new Quaternion(
    2.8253027477639523e-15,
    0.7071067094802856,
    -8.429368136830817e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(0.49999889731407166, 2.25, 0.3824973404407501),
});
brownMountain2.addComponentOrReplace(transform3);

const brownMountain3 = new Entity("brownMountain3");
engine.addEntity(brownMountain3);
brownMountain3.setParent(_scene);
brownMountain3.addComponentOrReplace(gltfShape);
const transform4 = new Transform({
  position: new Vector3(2.5, 0, 18),
  rotation: new Quaternion(
    2.8253027477639523e-15,
    0.7071067094802856,
    -8.429368136830817e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(0.4999988377094269, 2.25, 0.38249728083610535),
});
brownMountain3.addComponentOrReplace(transform4);

const brownMountain4 = new Entity("brownMountain4");
engine.addEntity(brownMountain4);
brownMountain4.setParent(_scene);
brownMountain4.addComponentOrReplace(gltfShape);
const transform5 = new Transform({
  position: new Vector3(2.5, 0, 24.5),
  rotation: new Quaternion(
    2.8253027477639523e-15,
    0.7071067094802856,
    -8.429368136830817e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(0.4999987781047821, 2.25, 0.38249722123146057),
});
brownMountain4.addComponentOrReplace(transform5);

const brownMountain5 = new Entity("brownMountain5");
engine.addEntity(brownMountain5);
brownMountain5.setParent(_scene);
brownMountain5.addComponentOrReplace(gltfShape);
const transform6 = new Transform({
  position: new Vector3(3, 0, 31),
  rotation: new Quaternion(
    2.8253027477639523e-15,
    0.7071067094802856,
    -8.429368136830817e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(0.49999871850013733, 2.25, 0.3824971616268158),
});
brownMountain5.addComponentOrReplace(transform6);

const brownMountain6 = new Entity("brownMountain6");
engine.addEntity(brownMountain6);
brownMountain6.setParent(_scene);
brownMountain6.addComponentOrReplace(gltfShape);
const transform7 = new Transform({
  position: new Vector3(3, 0, 37),
  rotation: new Quaternion(
    2.8253027477639523e-15,
    0.7071067094802856,
    -8.429368136830817e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(0.49999865889549255, 2.25, 0.382497102022171),
});
brownMountain6.addComponentOrReplace(transform7);

const brownMountain7 = new Entity("brownMountain7");
engine.addEntity(brownMountain7);
brownMountain7.setParent(_scene);
brownMountain7.addComponentOrReplace(gltfShape);
const transform8 = new Transform({
  position: new Vector3(2.5, 0, 43.5),
  rotation: new Quaternion(
    2.8253027477639523e-15,
    0.7071067094802856,
    -8.429368136830817e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(0.4999985992908478, 2.25, 0.38249704241752625),
});
brownMountain7.addComponentOrReplace(transform8);

const brownMountain8 = new Entity("brownMountain8");
engine.addEntity(brownMountain8);
brownMountain8.setParent(_scene);
brownMountain8.addComponentOrReplace(gltfShape);
const transform9 = new Transform({
  position: new Vector3(2.5, 0, 6.5),
  rotation: new Quaternion(
    2.8253027477639523e-15,
    0.7071067094802856,
    -8.429368136830817e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(0.4999988377094269, 2.25, 0.38249728083610535),
});
brownMountain8.addComponentOrReplace(transform9);

const brownMountain9 = new Entity("brownMountain9");
engine.addEntity(brownMountain9);
brownMountain9.setParent(_scene);
brownMountain9.addComponentOrReplace(gltfShape);
const transform10 = new Transform({
  position: new Vector3(2.5, 0, 13.5),
  rotation: new Quaternion(
    2.8253027477639523e-15,
    0.7071067094802856,
    -8.429368136830817e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(0.4999988377094269, 2.25, 0.38249728083610535),
});
brownMountain9.addComponentOrReplace(transform10);

const brownMountain10 = new Entity("brownMountain10");
engine.addEntity(brownMountain10);
brownMountain10.setParent(_scene);
brownMountain10.addComponentOrReplace(gltfShape);
const transform11 = new Transform({
  position: new Vector3(2.5, 0, 21),
  rotation: new Quaternion(
    2.8253027477639523e-15,
    0.7071067094802856,
    -8.429368136830817e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(0.4999987781047821, 2.25, 0.38249722123146057),
});
brownMountain10.addComponentOrReplace(transform11);

const brownMountain11 = new Entity("brownMountain11");
engine.addEntity(brownMountain11);
brownMountain11.setParent(_scene);
brownMountain11.addComponentOrReplace(gltfShape);
const transform12 = new Transform({
  position: new Vector3(2.5, 0, 28),
  rotation: new Quaternion(
    2.8253027477639523e-15,
    0.7071067094802856,
    -8.429368136830817e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(0.49999871850013733, 2.25, 0.3824971616268158),
});
brownMountain11.addComponentOrReplace(transform12);

const brownMountain12 = new Entity("brownMountain12");
engine.addEntity(brownMountain12);
brownMountain12.setParent(_scene);
brownMountain12.addComponentOrReplace(gltfShape);
const transform13 = new Transform({
  position: new Vector3(2.5, 0, 33.5),
  rotation: new Quaternion(
    2.8253027477639523e-15,
    0.7071067094802856,
    -8.429368136830817e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(0.49999865889549255, 2.25, 0.382497102022171),
});
brownMountain12.addComponentOrReplace(transform13);

const brownMountain13 = new Entity("brownMountain13");
engine.addEntity(brownMountain13);
brownMountain13.setParent(_scene);
brownMountain13.addComponentOrReplace(gltfShape);
const transform14 = new Transform({
  position: new Vector3(2.5, 0, 41.5),
  rotation: new Quaternion(
    2.8253027477639523e-15,
    0.7071067094802856,
    -8.429368136830817e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(0.4999985992908478, 2.25, 0.38249704241752625),
});
brownMountain13.addComponentOrReplace(transform14);

const brownMountain14 = new Entity("brownMountain14");
engine.addEntity(brownMountain14);
brownMountain14.setParent(_scene);
brownMountain14.addComponentOrReplace(gltfShape);
const transform15 = new Transform({
  position: new Vector3(1, 2.5, 7.5),
  rotation: new Quaternion(
    3.966481650237701e-15,
    -0.70710688829422,
    8.429368136830817e-8,
    -0.7071067094802856
  ),
  scale: new Vector3(0.49999865889549255, 2.25, 0.38249707221984863),
});
brownMountain14.addComponentOrReplace(transform15);

const brownMountain15 = new Entity("brownMountain15");
engine.addEntity(brownMountain15);
brownMountain15.setParent(_scene);
brownMountain15.addComponentOrReplace(gltfShape);
const transform16 = new Transform({
  position: new Vector3(1, 2.5, 13),
  rotation: new Quaternion(
    3.966481650237701e-15,
    -0.70710688829422,
    8.429368136830817e-8,
    -0.7071067094802856
  ),
  scale: new Vector3(0.49999865889549255, 2.25, 0.38249707221984863),
});
brownMountain15.addComponentOrReplace(transform16);

const brownMountain16 = new Entity("brownMountain16");
engine.addEntity(brownMountain16);
brownMountain16.setParent(_scene);
brownMountain16.addComponentOrReplace(gltfShape);
const transform17 = new Transform({
  position: new Vector3(1, 4.5, 10.5),
  rotation: new Quaternion(
    3.966481650237701e-15,
    -0.70710688829422,
    8.429368136830817e-8,
    -0.7071067094802856
  ),
  scale: new Vector3(0.49999865889549255, 2.25, 0.38249707221984863),
});
brownMountain16.addComponentOrReplace(transform17);

const brownMountain17 = new Entity("brownMountain17");
engine.addEntity(brownMountain17);
brownMountain17.setParent(_scene);
brownMountain17.addComponentOrReplace(gltfShape);
const transform18 = new Transform({
  position: new Vector3(1, 2.5, 19.5),
  rotation: new Quaternion(
    3.966481650237701e-15,
    -0.70710688829422,
    8.429368136830817e-8,
    -0.7071067094802856
  ),
  scale: new Vector3(0.49999865889549255, 2.25, 0.38249707221984863),
});
brownMountain17.addComponentOrReplace(transform18);

const brownMountain18 = new Entity("brownMountain18");
engine.addEntity(brownMountain18);
brownMountain18.setParent(_scene);
brownMountain18.addComponentOrReplace(gltfShape);
const transform19 = new Transform({
  position: new Vector3(1, 2.5, 25.5),
  rotation: new Quaternion(
    3.966481650237701e-15,
    -0.70710688829422,
    8.429368136830817e-8,
    -0.7071067094802856
  ),
  scale: new Vector3(0.49999865889549255, 2.25, 0.38249707221984863),
});
brownMountain18.addComponentOrReplace(transform19);

const brownMountain19 = new Entity("brownMountain19");
engine.addEntity(brownMountain19);
brownMountain19.setParent(_scene);
brownMountain19.addComponentOrReplace(gltfShape);
const transform20 = new Transform({
  position: new Vector3(1, 7, 23.5),
  rotation: new Quaternion(
    3.966481650237701e-15,
    -0.70710688829422,
    8.429368136830817e-8,
    -0.7071067094802856
  ),
  scale: new Vector3(0.49999865889549255, 2.25, 0.38249707221984863),
});
brownMountain19.addComponentOrReplace(transform20);

const brownMountain20 = new Entity("brownMountain20");
engine.addEntity(brownMountain20);
brownMountain20.setParent(_scene);
brownMountain20.addComponentOrReplace(gltfShape);
const transform21 = new Transform({
  position: new Vector3(1, 2.5, 31.5),
  rotation: new Quaternion(
    3.966481650237701e-15,
    -0.70710688829422,
    8.429368136830817e-8,
    -0.7071067094802856
  ),
  scale: new Vector3(0.49999865889549255, 2.25, 0.38249707221984863),
});
brownMountain20.addComponentOrReplace(transform21);

const brownMountain21 = new Entity("brownMountain21");
engine.addEntity(brownMountain21);
brownMountain21.setParent(_scene);
brownMountain21.addComponentOrReplace(gltfShape);
const transform22 = new Transform({
  position: new Vector3(1, 2.5, 37.5),
  rotation: new Quaternion(
    3.966481650237701e-15,
    -0.70710688829422,
    8.429368136830817e-8,
    -0.7071067094802856
  ),
  scale: new Vector3(0.49999865889549255, 2.25, 0.38249707221984863),
});
brownMountain21.addComponentOrReplace(transform22);

const brownMountain22 = new Entity("brownMountain22");
engine.addEntity(brownMountain22);
brownMountain22.setParent(_scene);
brownMountain22.addComponentOrReplace(gltfShape);
const transform23 = new Transform({
  position: new Vector3(1, 6, 35),
  rotation: new Quaternion(
    3.966481650237701e-15,
    -0.70710688829422,
    8.429368136830817e-8,
    -0.7071067094802856
  ),
  scale: new Vector3(0.49999865889549255, 2.25, 0.38249707221984863),
});
brownMountain22.addComponentOrReplace(transform23);

const brownMountain24 = new Entity("brownMountain24");
engine.addEntity(brownMountain24);
brownMountain24.setParent(_scene);
brownMountain24.addComponentOrReplace(gltfShape);
const transform24 = new Transform({
  position: new Vector3(1, 3.5, 30),
  rotation: new Quaternion(
    3.966481650237701e-15,
    -0.70710688829422,
    8.429368136830817e-8,
    -0.7071067094802856
  ),
  scale: new Vector3(0.49999865889549255, 2.25, 0.38249707221984863),
});
brownMountain24.addComponentOrReplace(transform24);

const brownMountain25 = new Entity("brownMountain25");
engine.addEntity(brownMountain25);
brownMountain25.setParent(_scene);
brownMountain25.addComponentOrReplace(gltfShape);
const transform25 = new Transform({
  position: new Vector3(1, 3.5, 16.5),
  rotation: new Quaternion(
    3.966481650237701e-15,
    -0.70710688829422,
    8.429368136830817e-8,
    -0.7071067094802856
  ),
  scale: new Vector3(0.49999865889549255, 2.25, 0.38249707221984863),
});
brownMountain25.addComponentOrReplace(transform25);

const brownMountain26 = new Entity("brownMountain26");
engine.addEntity(brownMountain26);
brownMountain26.setParent(_scene);
brownMountain26.addComponentOrReplace(gltfShape);
const transform26 = new Transform({
  position: new Vector3(1.5, 3.5, 42),
  rotation: new Quaternion(
    3.966481650237701e-15,
    -0.70710688829422,
    8.429368136830817e-8,
    -0.7071067094802856
  ),
  scale: new Vector3(0.49999865889549255, 2.25, 0.38249707221984863),
});
brownMountain26.addComponentOrReplace(transform26);

const brownMountain23 = new Entity("brownMountain23");
engine.addEntity(brownMountain23);
brownMountain23.setParent(_scene);
brownMountain23.addComponentOrReplace(gltfShape);
const transform27 = new Transform({
  position: new Vector3(1, 4.5, 10.5),
  rotation: new Quaternion(
    3.966481650237701e-15,
    -0.70710688829422,
    8.429368136830817e-8,
    -0.7071067094802856
  ),
  scale: new Vector3(0.49999865889549255, 2.25, 0.38249707221984863),
});
brownMountain23.addComponentOrReplace(transform27);

const caribbeanWaterWithSideRocks = new Entity("caribbeanWaterWithSideRocks");
engine.addEntity(caribbeanWaterWithSideRocks);
caribbeanWaterWithSideRocks.setParent(_scene);
const transform28 = new Transform({
  position: new Vector3(7, 0, 8),
  rotation: new Quaternion(
    1.539415254273621e-15,
    0.7071067690849304,
    -8.429368847373553e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(1, 1, 1),
});
caribbeanWaterWithSideRocks.addComponentOrReplace(transform28);
const gltfShape2 = new GLTFShape(
  "52850b6b-49b5-40f6-8b1b-c5ee95de159b/WaterPatchSide_01/WaterPatchSide_01.glb"
);
gltfShape2.withCollisions = true;
gltfShape2.isPointerBlocker = true;
gltfShape2.visible = true;
caribbeanWaterWithSideRocks.addComponentOrReplace(gltfShape2);

const caribbeanWaterWithSideRocks2 = new Entity("caribbeanWaterWithSideRocks2");
engine.addEntity(caribbeanWaterWithSideRocks2);
caribbeanWaterWithSideRocks2.setParent(_scene);
caribbeanWaterWithSideRocks2.addComponentOrReplace(gltfShape2);
const transform29 = new Transform({
  position: new Vector3(6.5, 0, 16),
  rotation: new Quaternion(
    1.539415254273621e-15,
    0.7071067690849304,
    -8.429368847373553e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(1, 1, 1),
});
caribbeanWaterWithSideRocks2.addComponentOrReplace(transform29);

const caribbeanWaterWithSideRocks3 = new Entity("caribbeanWaterWithSideRocks3");
engine.addEntity(caribbeanWaterWithSideRocks3);
caribbeanWaterWithSideRocks3.setParent(_scene);
caribbeanWaterWithSideRocks3.addComponentOrReplace(gltfShape2);
const transform30 = new Transform({
  position: new Vector3(6.5, 0, 24),
  rotation: new Quaternion(
    1.539415254273621e-15,
    0.7071067690849304,
    -8.429368847373553e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(1, 1, 1),
});
caribbeanWaterWithSideRocks3.addComponentOrReplace(transform30);

const caribbeanWaterWithSideRocks4 = new Entity("caribbeanWaterWithSideRocks4");
engine.addEntity(caribbeanWaterWithSideRocks4);
caribbeanWaterWithSideRocks4.setParent(_scene);
caribbeanWaterWithSideRocks4.addComponentOrReplace(gltfShape2);
const transform31 = new Transform({
  position: new Vector3(6.5, 0, 31.5),
  rotation: new Quaternion(
    1.539415254273621e-15,
    0.7071067690849304,
    -8.429368847373553e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(1, 1, 1),
});
caribbeanWaterWithSideRocks4.addComponentOrReplace(transform31);

const caribbeanWaterWithSideRocks5 = new Entity("caribbeanWaterWithSideRocks5");
engine.addEntity(caribbeanWaterWithSideRocks5);
caribbeanWaterWithSideRocks5.setParent(_scene);
caribbeanWaterWithSideRocks5.addComponentOrReplace(gltfShape2);
const transform32 = new Transform({
  position: new Vector3(6.5, 0, 39.5),
  rotation: new Quaternion(
    1.539415254273621e-15,
    0.7071067690849304,
    -8.429368847373553e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(1, 1, 1),
});
caribbeanWaterWithSideRocks5.addComponentOrReplace(transform32);

const caribbeanWaterWithSideRocks6 = new Entity("caribbeanWaterWithSideRocks6");
engine.addEntity(caribbeanWaterWithSideRocks6);
caribbeanWaterWithSideRocks6.setParent(_scene);
caribbeanWaterWithSideRocks6.addComponentOrReplace(gltfShape2);
const transform33 = new Transform({
  position: new Vector3(6.5, 0, 47.5),
  rotation: new Quaternion(
    1.539415254273621e-15,
    0.7071067690849304,
    -8.429368847373553e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(1, 1, 1),
});
caribbeanWaterWithSideRocks6.addComponentOrReplace(transform33);

const caribbeanWater = new Entity("caribbeanWater");
engine.addEntity(caribbeanWater);
caribbeanWater.setParent(_scene);
const transform34 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
caribbeanWater.addComponentOrReplace(transform34);
const gltfShape3 = new GLTFShape(
  "390b876e-4b3a-4e78-bd03-5be21b1ecc67/WaterPatchFull_01/WaterPatchFull_01.glb"
);
gltfShape3.withCollisions = true;
gltfShape3.isPointerBlocker = true;
gltfShape3.visible = true;
caribbeanWater.addComponentOrReplace(gltfShape3);

const caribbeanWater2 = new Entity("caribbeanWater2");
engine.addEntity(caribbeanWater2);
caribbeanWater2.setParent(_scene);
caribbeanWater2.addComponentOrReplace(gltfShape3);
const transform35 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
caribbeanWater2.addComponentOrReplace(transform35);

const caribbeanWater3 = new Entity("caribbeanWater3");
engine.addEntity(caribbeanWater3);
caribbeanWater3.setParent(_scene);
caribbeanWater3.addComponentOrReplace(gltfShape3);
const transform36 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
caribbeanWater3.addComponentOrReplace(transform36);

const caribbeanWater4 = new Entity("caribbeanWater4");
engine.addEntity(caribbeanWater4);
caribbeanWater4.setParent(_scene);
caribbeanWater4.addComponentOrReplace(gltfShape3);
const transform37 = new Transform({
  position: new Vector3(8, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
caribbeanWater4.addComponentOrReplace(transform37);

const caribbeanWater5 = new Entity("caribbeanWater5");
engine.addEntity(caribbeanWater5);
caribbeanWater5.setParent(_scene);
caribbeanWater5.addComponentOrReplace(gltfShape3);
const transform38 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
caribbeanWater5.addComponentOrReplace(transform38);

const caribbeanWater6 = new Entity("caribbeanWater6");
engine.addEntity(caribbeanWater6);
caribbeanWater6.setParent(_scene);
caribbeanWater6.addComponentOrReplace(gltfShape3);
const transform39 = new Transform({
  position: new Vector3(8, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
caribbeanWater6.addComponentOrReplace(transform39);

const lilypad = new Entity("lilypad");
engine.addEntity(lilypad);
lilypad.setParent(_scene);
const transform40 = new Transform({
  position: new Vector3(6.5, 0.5, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
lilypad.addComponentOrReplace(transform40);
const gltfShape4 = new GLTFShape(
  "c61cf34f-7023-465e-8dd0-c32313177a78/LilyPad_01/LilyPad_01.glb"
);
gltfShape4.withCollisions = true;
gltfShape4.isPointerBlocker = true;
gltfShape4.visible = true;
lilypad.addComponentOrReplace(gltfShape4);

const lilypad2 = new Entity("lilypad2");
engine.addEntity(lilypad2);
lilypad2.setParent(_scene);
lilypad2.addComponentOrReplace(gltfShape4);
const transform41 = new Transform({
  position: new Vector3(9.5, 0.5, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
lilypad2.addComponentOrReplace(transform41);

const wallPlainPistachio = new Entity("wallPlainPistachio");
engine.addEntity(wallPlainPistachio);
wallPlainPistachio.setParent(_scene);
const transform42 = new Transform({
  position: new Vector3(16, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio.addComponentOrReplace(transform42);
const gltfShape5 = new GLTFShape(
  "71bba827-1721-4afc-a521-e75344c63f0f/PlainPistachioWall.glb"
);
gltfShape5.withCollisions = true;
gltfShape5.isPointerBlocker = true;
gltfShape5.visible = true;
wallPlainPistachio.addComponentOrReplace(gltfShape5);

const wallPlainPistachio2 = new Entity("wallPlainPistachio2");
engine.addEntity(wallPlainPistachio2);
wallPlainPistachio2.setParent(_scene);
wallPlainPistachio2.addComponentOrReplace(gltfShape5);
const transform43 = new Transform({
  position: new Vector3(14, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio2.addComponentOrReplace(transform43);

const wallPlainPistachio3 = new Entity("wallPlainPistachio3");
engine.addEntity(wallPlainPistachio3);
wallPlainPistachio3.setParent(_scene);
wallPlainPistachio3.addComponentOrReplace(gltfShape5);
const transform44 = new Transform({
  position: new Vector3(12, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio3.addComponentOrReplace(transform44);

const wallPlainPistachio4 = new Entity("wallPlainPistachio4");
engine.addEntity(wallPlainPistachio4);
wallPlainPistachio4.setParent(_scene);
wallPlainPistachio4.addComponentOrReplace(gltfShape5);
const transform45 = new Transform({
  position: new Vector3(10, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio4.addComponentOrReplace(transform45);

const wallPlainPistachio5 = new Entity("wallPlainPistachio5");
engine.addEntity(wallPlainPistachio5);
wallPlainPistachio5.setParent(_scene);
wallPlainPistachio5.addComponentOrReplace(gltfShape5);
const transform46 = new Transform({
  position: new Vector3(8, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio5.addComponentOrReplace(transform46);

const wallPlainPistachio6 = new Entity("wallPlainPistachio6");
engine.addEntity(wallPlainPistachio6);
wallPlainPistachio6.setParent(_scene);
wallPlainPistachio6.addComponentOrReplace(gltfShape5);
const transform47 = new Transform({
  position: new Vector3(6, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio6.addComponentOrReplace(transform47);

const wallPlainPistachio7 = new Entity("wallPlainPistachio7");
engine.addEntity(wallPlainPistachio7);
wallPlainPistachio7.setParent(_scene);
wallPlainPistachio7.addComponentOrReplace(gltfShape5);
const transform48 = new Transform({
  position: new Vector3(4, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio7.addComponentOrReplace(transform48);

const wallPlainPistachio8 = new Entity("wallPlainPistachio8");
engine.addEntity(wallPlainPistachio8);
wallPlainPistachio8.setParent(_scene);
wallPlainPistachio8.addComponentOrReplace(gltfShape5);
const transform49 = new Transform({
  position: new Vector3(2, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio8.addComponentOrReplace(transform49);

const wallPlainPistachio9 = new Entity("wallPlainPistachio9");
engine.addEntity(wallPlainPistachio9);
wallPlainPistachio9.setParent(_scene);
wallPlainPistachio9.addComponentOrReplace(gltfShape5);
const transform50 = new Transform({
  position: new Vector3(12, 4, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio9.addComponentOrReplace(transform50);

const wallPlainPistachio10 = new Entity("wallPlainPistachio10");
engine.addEntity(wallPlainPistachio10);
wallPlainPistachio10.setParent(_scene);
wallPlainPistachio10.addComponentOrReplace(gltfShape5);
const transform51 = new Transform({
  position: new Vector3(16, 4, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio10.addComponentOrReplace(transform51);

const wallPlainPistachio11 = new Entity("wallPlainPistachio11");
engine.addEntity(wallPlainPistachio11);
wallPlainPistachio11.setParent(_scene);
wallPlainPistachio11.addComponentOrReplace(gltfShape5);
const transform52 = new Transform({
  position: new Vector3(14, 4, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio11.addComponentOrReplace(transform52);

const wallPlainPistachio12 = new Entity("wallPlainPistachio12");
engine.addEntity(wallPlainPistachio12);
wallPlainPistachio12.setParent(_scene);
wallPlainPistachio12.addComponentOrReplace(gltfShape5);
const transform53 = new Transform({
  position: new Vector3(10, 4, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio12.addComponentOrReplace(transform53);

const wallPlainPistachio13 = new Entity("wallPlainPistachio13");
engine.addEntity(wallPlainPistachio13);
wallPlainPistachio13.setParent(_scene);
wallPlainPistachio13.addComponentOrReplace(gltfShape5);
const transform54 = new Transform({
  position: new Vector3(8, 4, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio13.addComponentOrReplace(transform54);

const wallPlainPistachio14 = new Entity("wallPlainPistachio14");
engine.addEntity(wallPlainPistachio14);
wallPlainPistachio14.setParent(_scene);
wallPlainPistachio14.addComponentOrReplace(gltfShape5);
const transform55 = new Transform({
  position: new Vector3(6, 4, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio14.addComponentOrReplace(transform55);

const wallPlainPistachio15 = new Entity("wallPlainPistachio15");
engine.addEntity(wallPlainPistachio15);
wallPlainPistachio15.setParent(_scene);
wallPlainPistachio15.addComponentOrReplace(gltfShape5);
const transform56 = new Transform({
  position: new Vector3(4, 4, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio15.addComponentOrReplace(transform56);

const wallPlainPistachio16 = new Entity("wallPlainPistachio16");
engine.addEntity(wallPlainPistachio16);
wallPlainPistachio16.setParent(_scene);
wallPlainPistachio16.addComponentOrReplace(gltfShape5);
const transform57 = new Transform({
  position: new Vector3(2, 4, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio16.addComponentOrReplace(transform57);

const wallPlainPistachio17 = new Entity("wallPlainPistachio17");
engine.addEntity(wallPlainPistachio17);
wallPlainPistachio17.setParent(_scene);
wallPlainPistachio17.addComponentOrReplace(gltfShape5);
const transform58 = new Transform({
  position: new Vector3(16, 8, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio17.addComponentOrReplace(transform58);

const wallPlainPistachio18 = new Entity("wallPlainPistachio18");
engine.addEntity(wallPlainPistachio18);
wallPlainPistachio18.setParent(_scene);
wallPlainPistachio18.addComponentOrReplace(gltfShape5);
const transform59 = new Transform({
  position: new Vector3(14, 8, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio18.addComponentOrReplace(transform59);

const wallPlainPistachio19 = new Entity("wallPlainPistachio19");
engine.addEntity(wallPlainPistachio19);
wallPlainPistachio19.setParent(_scene);
wallPlainPistachio19.addComponentOrReplace(gltfShape5);
const transform60 = new Transform({
  position: new Vector3(12, 8, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio19.addComponentOrReplace(transform60);

const wallPlainPistachio20 = new Entity("wallPlainPistachio20");
engine.addEntity(wallPlainPistachio20);
wallPlainPistachio20.setParent(_scene);
wallPlainPistachio20.addComponentOrReplace(gltfShape5);
const transform61 = new Transform({
  position: new Vector3(10, 8, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio20.addComponentOrReplace(transform61);

const wallPlainPistachio21 = new Entity("wallPlainPistachio21");
engine.addEntity(wallPlainPistachio21);
wallPlainPistachio21.setParent(_scene);
wallPlainPistachio21.addComponentOrReplace(gltfShape5);
const transform62 = new Transform({
  position: new Vector3(8, 8, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio21.addComponentOrReplace(transform62);

const wallPlainPistachio22 = new Entity("wallPlainPistachio22");
engine.addEntity(wallPlainPistachio22);
wallPlainPistachio22.setParent(_scene);
wallPlainPistachio22.addComponentOrReplace(gltfShape5);
const transform63 = new Transform({
  position: new Vector3(6, 8, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio22.addComponentOrReplace(transform63);

const wallPlainPistachio23 = new Entity("wallPlainPistachio23");
engine.addEntity(wallPlainPistachio23);
wallPlainPistachio23.setParent(_scene);
wallPlainPistachio23.addComponentOrReplace(gltfShape5);
const transform64 = new Transform({
  position: new Vector3(4, 8, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio23.addComponentOrReplace(transform64);

const wallPlainPistachio24 = new Entity("wallPlainPistachio24");
engine.addEntity(wallPlainPistachio24);
wallPlainPistachio24.setParent(_scene);
wallPlainPistachio24.addComponentOrReplace(gltfShape5);
const transform65 = new Transform({
  position: new Vector3(2, 8, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio24.addComponentOrReplace(transform65);

const wallPlainPistachio25 = new Entity("wallPlainPistachio25");
engine.addEntity(wallPlainPistachio25);
wallPlainPistachio25.setParent(_scene);
wallPlainPistachio25.addComponentOrReplace(gltfShape5);
const transform66 = new Transform({
  position: new Vector3(16, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio25.addComponentOrReplace(transform66);

const wallPlainPistachio26 = new Entity("wallPlainPistachio26");
engine.addEntity(wallPlainPistachio26);
wallPlainPistachio26.setParent(_scene);
wallPlainPistachio26.addComponentOrReplace(gltfShape5);
const transform67 = new Transform({
  position: new Vector3(14.5, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio26.addComponentOrReplace(transform67);

const wallPlainPistachio27 = new Entity("wallPlainPistachio27");
engine.addEntity(wallPlainPistachio27);
wallPlainPistachio27.setParent(_scene);
wallPlainPistachio27.addComponentOrReplace(gltfShape5);
const transform68 = new Transform({
  position: new Vector3(12.5, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio27.addComponentOrReplace(transform68);

const wallPlainPistachio28 = new Entity("wallPlainPistachio28");
engine.addEntity(wallPlainPistachio28);
wallPlainPistachio28.setParent(_scene);
wallPlainPistachio28.addComponentOrReplace(gltfShape5);
const transform69 = new Transform({
  position: new Vector3(8.5, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio28.addComponentOrReplace(transform69);

const wallPlainPistachio29 = new Entity("wallPlainPistachio29");
engine.addEntity(wallPlainPistachio29);
wallPlainPistachio29.setParent(_scene);
wallPlainPistachio29.addComponentOrReplace(gltfShape5);
const transform70 = new Transform({
  position: new Vector3(10.5, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio29.addComponentOrReplace(transform70);

const wallPlainPistachio30 = new Entity("wallPlainPistachio30");
engine.addEntity(wallPlainPistachio30);
wallPlainPistachio30.setParent(_scene);
wallPlainPistachio30.addComponentOrReplace(gltfShape5);
const transform71 = new Transform({
  position: new Vector3(6.5, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio30.addComponentOrReplace(transform71);

const wallPlainPistachio31 = new Entity("wallPlainPistachio31");
engine.addEntity(wallPlainPistachio31);
wallPlainPistachio31.setParent(_scene);
wallPlainPistachio31.addComponentOrReplace(gltfShape5);
const transform72 = new Transform({
  position: new Vector3(2.5, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio31.addComponentOrReplace(transform72);

const wallPlainPistachio32 = new Entity("wallPlainPistachio32");
engine.addEntity(wallPlainPistachio32);
wallPlainPistachio32.setParent(_scene);
wallPlainPistachio32.addComponentOrReplace(gltfShape5);
const transform73 = new Transform({
  position: new Vector3(4.5, 8, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio32.addComponentOrReplace(transform73);

const wallPlainPistachio33 = new Entity("wallPlainPistachio33");
engine.addEntity(wallPlainPistachio33);
wallPlainPistachio33.setParent(_scene);
wallPlainPistachio33.addComponentOrReplace(gltfShape5);
const transform74 = new Transform({
  position: new Vector3(16, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio33.addComponentOrReplace(transform74);

const wallPlainPistachio34 = new Entity("wallPlainPistachio34");
engine.addEntity(wallPlainPistachio34);
wallPlainPistachio34.setParent(_scene);
wallPlainPistachio34.addComponentOrReplace(gltfShape5);
const transform75 = new Transform({
  position: new Vector3(14.5, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio34.addComponentOrReplace(transform75);

const wallPlainPistachio35 = new Entity("wallPlainPistachio35");
engine.addEntity(wallPlainPistachio35);
wallPlainPistachio35.setParent(_scene);
wallPlainPistachio35.addComponentOrReplace(gltfShape5);
const transform76 = new Transform({
  position: new Vector3(12.5, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio35.addComponentOrReplace(transform76);

const wallPlainPistachio36 = new Entity("wallPlainPistachio36");
engine.addEntity(wallPlainPistachio36);
wallPlainPistachio36.setParent(_scene);
wallPlainPistachio36.addComponentOrReplace(gltfShape5);
const transform77 = new Transform({
  position: new Vector3(10.5, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio36.addComponentOrReplace(transform77);

const wallPlainPistachio37 = new Entity("wallPlainPistachio37");
engine.addEntity(wallPlainPistachio37);
wallPlainPistachio37.setParent(_scene);
wallPlainPistachio37.addComponentOrReplace(gltfShape5);
const transform78 = new Transform({
  position: new Vector3(8.5, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio37.addComponentOrReplace(transform78);

const wallPlainPistachio38 = new Entity("wallPlainPistachio38");
engine.addEntity(wallPlainPistachio38);
wallPlainPistachio38.setParent(_scene);
wallPlainPistachio38.addComponentOrReplace(gltfShape5);
const transform79 = new Transform({
  position: new Vector3(4.5, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio38.addComponentOrReplace(transform79);

const wallPlainPistachio39 = new Entity("wallPlainPistachio39");
engine.addEntity(wallPlainPistachio39);
wallPlainPistachio39.setParent(_scene);
wallPlainPistachio39.addComponentOrReplace(gltfShape5);
const transform80 = new Transform({
  position: new Vector3(2.5, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio39.addComponentOrReplace(transform80);

const wallPlainPistachio40 = new Entity("wallPlainPistachio40");
engine.addEntity(wallPlainPistachio40);
wallPlainPistachio40.setParent(_scene);
wallPlainPistachio40.addComponentOrReplace(gltfShape5);
const transform81 = new Transform({
  position: new Vector3(6.5, 4, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio40.addComponentOrReplace(transform81);

const wallPlainPistachio41 = new Entity("wallPlainPistachio41");
engine.addEntity(wallPlainPistachio41);
wallPlainPistachio41.setParent(_scene);
wallPlainPistachio41.addComponentOrReplace(gltfShape5);
const transform82 = new Transform({
  position: new Vector3(16, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio41.addComponentOrReplace(transform82);

const wallPlainPistachio42 = new Entity("wallPlainPistachio42");
engine.addEntity(wallPlainPistachio42);
wallPlainPistachio42.setParent(_scene);
wallPlainPistachio42.addComponentOrReplace(gltfShape5);
const transform83 = new Transform({
  position: new Vector3(14.5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio42.addComponentOrReplace(transform83);

const wallPlainPistachio43 = new Entity("wallPlainPistachio43");
engine.addEntity(wallPlainPistachio43);
wallPlainPistachio43.setParent(_scene);
wallPlainPistachio43.addComponentOrReplace(gltfShape5);
const transform84 = new Transform({
  position: new Vector3(12.5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio43.addComponentOrReplace(transform84);

const wallPlainPistachio44 = new Entity("wallPlainPistachio44");
engine.addEntity(wallPlainPistachio44);
wallPlainPistachio44.setParent(_scene);
wallPlainPistachio44.addComponentOrReplace(gltfShape5);
const transform85 = new Transform({
  position: new Vector3(8.5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio44.addComponentOrReplace(transform85);

const wallPlainPistachio45 = new Entity("wallPlainPistachio45");
engine.addEntity(wallPlainPistachio45);
wallPlainPistachio45.setParent(_scene);
wallPlainPistachio45.addComponentOrReplace(gltfShape5);
const transform86 = new Transform({
  position: new Vector3(6.5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio45.addComponentOrReplace(transform86);

const wallPlainPistachio46 = new Entity("wallPlainPistachio46");
engine.addEntity(wallPlainPistachio46);
wallPlainPistachio46.setParent(_scene);
wallPlainPistachio46.addComponentOrReplace(gltfShape5);
const transform87 = new Transform({
  position: new Vector3(10.5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio46.addComponentOrReplace(transform87);

const wallPlainPistachio47 = new Entity("wallPlainPistachio47");
engine.addEntity(wallPlainPistachio47);
wallPlainPistachio47.setParent(_scene);
wallPlainPistachio47.addComponentOrReplace(gltfShape5);
const transform88 = new Transform({
  position: new Vector3(2.5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio47.addComponentOrReplace(transform88);

const wallPlainPistachio48 = new Entity("wallPlainPistachio48");
engine.addEntity(wallPlainPistachio48);
wallPlainPistachio48.setParent(_scene);
wallPlainPistachio48.addComponentOrReplace(gltfShape5);
const transform89 = new Transform({
  position: new Vector3(4.5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
wallPlainPistachio48.addComponentOrReplace(transform89);

const wallPlainPistachio49 = new Entity("wallPlainPistachio49");
engine.addEntity(wallPlainPistachio49);
wallPlainPistachio49.setParent(_scene);
wallPlainPistachio49.addComponentOrReplace(gltfShape5);
const transform90 = new Transform({
  position: new Vector3(0.5, 0, 46),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373),
});
wallPlainPistachio49.addComponentOrReplace(transform90);

const wallPlainPistachio50 = new Entity("wallPlainPistachio50");
engine.addEntity(wallPlainPistachio50);
wallPlainPistachio50.setParent(_scene);
wallPlainPistachio50.addComponentOrReplace(gltfShape5);
const transform91 = new Transform({
  position: new Vector3(0.5, 4, 42),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
wallPlainPistachio50.addComponentOrReplace(transform91);

const wallPlainPistachio51 = new Entity("wallPlainPistachio51");
engine.addEntity(wallPlainPistachio51);
wallPlainPistachio51.setParent(_scene);
wallPlainPistachio51.addComponentOrReplace(gltfShape5);
const transform92 = new Transform({
  position: new Vector3(0.5, 8, 42),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
wallPlainPistachio51.addComponentOrReplace(transform92);

const wallPlainPistachio52 = new Entity("wallPlainPistachio52");
engine.addEntity(wallPlainPistachio52);
wallPlainPistachio52.setParent(_scene);
wallPlainPistachio52.addComponentOrReplace(gltfShape5);
const transform93 = new Transform({
  position: new Vector3(0.5, 8, 40),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
wallPlainPistachio52.addComponentOrReplace(transform93);

const wallPlainPistachio53 = new Entity("wallPlainPistachio53");
engine.addEntity(wallPlainPistachio53);
wallPlainPistachio53.setParent(_scene);
wallPlainPistachio53.addComponentOrReplace(gltfShape5);
const transform94 = new Transform({
  position: new Vector3(0.5, 4, 40),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
wallPlainPistachio53.addComponentOrReplace(transform94);

const wallPlainPistachio54 = new Entity("wallPlainPistachio54");
engine.addEntity(wallPlainPistachio54);
wallPlainPistachio54.setParent(_scene);
wallPlainPistachio54.addComponentOrReplace(gltfShape5);
const transform95 = new Transform({
  position: new Vector3(0.5, 0, 42),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
wallPlainPistachio54.addComponentOrReplace(transform95);

const wallPlainPistachio55 = new Entity("wallPlainPistachio55");
engine.addEntity(wallPlainPistachio55);
wallPlainPistachio55.setParent(_scene);
wallPlainPistachio55.addComponentOrReplace(gltfShape5);
const transform96 = new Transform({
  position: new Vector3(0.5, 8, 30),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
wallPlainPistachio55.addComponentOrReplace(transform96);

const wallPlainPistachio56 = new Entity("wallPlainPistachio56");
engine.addEntity(wallPlainPistachio56);
wallPlainPistachio56.setParent(_scene);
wallPlainPistachio56.addComponentOrReplace(gltfShape5);
const transform97 = new Transform({
  position: new Vector3(0.5, 4, 34),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
wallPlainPistachio56.addComponentOrReplace(transform97);

const wallPlainPistachio57 = new Entity("wallPlainPistachio57");
engine.addEntity(wallPlainPistachio57);
wallPlainPistachio57.setParent(_scene);
wallPlainPistachio57.addComponentOrReplace(gltfShape5);
const transform98 = new Transform({
  position: new Vector3(0.5, 0, 40),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
wallPlainPistachio57.addComponentOrReplace(transform98);

const wallPlainPistachio58 = new Entity("wallPlainPistachio58");
engine.addEntity(wallPlainPistachio58);
wallPlainPistachio58.setParent(_scene);
wallPlainPistachio58.addComponentOrReplace(gltfShape5);
const transform99 = new Transform({
  position: new Vector3(0.5, 8, 32),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
wallPlainPistachio58.addComponentOrReplace(transform99);

const wallPlainPistachio59 = new Entity("wallPlainPistachio59");
engine.addEntity(wallPlainPistachio59);
wallPlainPistachio59.setParent(_scene);
wallPlainPistachio59.addComponentOrReplace(gltfShape5);
const transform100 = new Transform({
  position: new Vector3(0.5, 4, 32),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
wallPlainPistachio59.addComponentOrReplace(transform100);

const wallPlainPistachio60 = new Entity("wallPlainPistachio60");
engine.addEntity(wallPlainPistachio60);
wallPlainPistachio60.setParent(_scene);
wallPlainPistachio60.addComponentOrReplace(gltfShape5);
const transform101 = new Transform({
  position: new Vector3(0.5, 0, 32),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
wallPlainPistachio60.addComponentOrReplace(transform101);

const wallPlainPistachio61 = new Entity("wallPlainPistachio61");
engine.addEntity(wallPlainPistachio61);
wallPlainPistachio61.setParent(_scene);
wallPlainPistachio61.addComponentOrReplace(gltfShape5);
const transform102 = new Transform({
  position: new Vector3(0.5, 8, 34),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
wallPlainPistachio61.addComponentOrReplace(transform102);

const wallPlainPistachio62 = new Entity("wallPlainPistachio62");
engine.addEntity(wallPlainPistachio62);
wallPlainPistachio62.setParent(_scene);
wallPlainPistachio62.addComponentOrReplace(gltfShape5);
const transform103 = new Transform({
  position: new Vector3(0.5, 4, 36),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
wallPlainPistachio62.addComponentOrReplace(transform103);

const wallPlainPistachio63 = new Entity("wallPlainPistachio63");
engine.addEntity(wallPlainPistachio63);
wallPlainPistachio63.setParent(_scene);
wallPlainPistachio63.addComponentOrReplace(gltfShape5);
const transform104 = new Transform({
  position: new Vector3(0.5, 0, 30),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
wallPlainPistachio63.addComponentOrReplace(transform104);

const wallPlainPistachio64 = new Entity("wallPlainPistachio64");
engine.addEntity(wallPlainPistachio64);
wallPlainPistachio64.setParent(_scene);
wallPlainPistachio64.addComponentOrReplace(gltfShape5);
const transform105 = new Transform({
  position: new Vector3(0.5, 8, 36),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
wallPlainPistachio64.addComponentOrReplace(transform105);

const wallPlainPistachio65 = new Entity("wallPlainPistachio65");
engine.addEntity(wallPlainPistachio65);
wallPlainPistachio65.setParent(_scene);
wallPlainPistachio65.addComponentOrReplace(gltfShape5);
const transform106 = new Transform({
  position: new Vector3(0.5, 4, 38),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
wallPlainPistachio65.addComponentOrReplace(transform106);

const wallPlainPistachio66 = new Entity("wallPlainPistachio66");
engine.addEntity(wallPlainPistachio66);
wallPlainPistachio66.setParent(_scene);
wallPlainPistachio66.addComponentOrReplace(gltfShape5);
const transform107 = new Transform({
  position: new Vector3(0.5, 0, 28),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
wallPlainPistachio66.addComponentOrReplace(transform107);

const wallPlainPistachio67 = new Entity("wallPlainPistachio67");
engine.addEntity(wallPlainPistachio67);
wallPlainPistachio67.setParent(_scene);
wallPlainPistachio67.addComponentOrReplace(gltfShape5);
const transform108 = new Transform({
  position: new Vector3(0.5, 8, 38),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
wallPlainPistachio67.addComponentOrReplace(transform108);

const wallPlainPistachio68 = new Entity("wallPlainPistachio68");
engine.addEntity(wallPlainPistachio68);
wallPlainPistachio68.setParent(_scene);
wallPlainPistachio68.addComponentOrReplace(gltfShape5);
const transform109 = new Transform({
  position: new Vector3(0.5, 4, 28),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
wallPlainPistachio68.addComponentOrReplace(transform109);

const wallPlainPistachio69 = new Entity("wallPlainPistachio69");
engine.addEntity(wallPlainPistachio69);
wallPlainPistachio69.setParent(_scene);
wallPlainPistachio69.addComponentOrReplace(gltfShape5);
const transform110 = new Transform({
  position: new Vector3(0.5, 0, 26),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
wallPlainPistachio69.addComponentOrReplace(transform110);

const wallPlainPistachio70 = new Entity("wallPlainPistachio70");
engine.addEntity(wallPlainPistachio70);
wallPlainPistachio70.setParent(_scene);
wallPlainPistachio70.addComponentOrReplace(gltfShape5);
const transform111 = new Transform({
  position: new Vector3(0.5, 8, 28),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
wallPlainPistachio70.addComponentOrReplace(transform111);

const wallPlainPistachio71 = new Entity("wallPlainPistachio71");
engine.addEntity(wallPlainPistachio71);
wallPlainPistachio71.setParent(_scene);
wallPlainPistachio71.addComponentOrReplace(gltfShape5);
const transform112 = new Transform({
  position: new Vector3(0.5, 4, 30),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
wallPlainPistachio71.addComponentOrReplace(transform112);

const wallPlainPistachio72 = new Entity("wallPlainPistachio72");
engine.addEntity(wallPlainPistachio72);
wallPlainPistachio72.setParent(_scene);
wallPlainPistachio72.addComponentOrReplace(gltfShape5);
const transform113 = new Transform({
  position: new Vector3(0.5, 0, 34),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
wallPlainPistachio72.addComponentOrReplace(transform113);

const wallPlainPistachio73 = new Entity("wallPlainPistachio73");
engine.addEntity(wallPlainPistachio73);
wallPlainPistachio73.setParent(_scene);
wallPlainPistachio73.addComponentOrReplace(gltfShape5);
const transform114 = new Transform({
  position: new Vector3(0.5, 8, 26),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
wallPlainPistachio73.addComponentOrReplace(transform114);

const wallPlainPistachio74 = new Entity("wallPlainPistachio74");
engine.addEntity(wallPlainPistachio74);
wallPlainPistachio74.setParent(_scene);
wallPlainPistachio74.addComponentOrReplace(gltfShape5);
const transform115 = new Transform({
  position: new Vector3(0.5, 4, 26),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
wallPlainPistachio74.addComponentOrReplace(transform115);

const wallPlainPistachio75 = new Entity("wallPlainPistachio75");
engine.addEntity(wallPlainPistachio75);
wallPlainPistachio75.setParent(_scene);
wallPlainPistachio75.addComponentOrReplace(gltfShape5);
const transform116 = new Transform({
  position: new Vector3(0.5, 0, 36),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
wallPlainPistachio75.addComponentOrReplace(transform116);

const wallPlainPistachio76 = new Entity("wallPlainPistachio76");
engine.addEntity(wallPlainPistachio76);
wallPlainPistachio76.setParent(_scene);
wallPlainPistachio76.addComponentOrReplace(gltfShape5);
const transform117 = new Transform({
  position: new Vector3(0.5, 8, 46),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
wallPlainPistachio76.addComponentOrReplace(transform117);

const wallPlainPistachio77 = new Entity("wallPlainPistachio77");
engine.addEntity(wallPlainPistachio77);
wallPlainPistachio77.setParent(_scene);
wallPlainPistachio77.addComponentOrReplace(gltfShape5);
const transform118 = new Transform({
  position: new Vector3(0.5, 4, 46),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
wallPlainPistachio77.addComponentOrReplace(transform118);

const wallPlainPistachio78 = new Entity("wallPlainPistachio78");
engine.addEntity(wallPlainPistachio78);
wallPlainPistachio78.setParent(_scene);
wallPlainPistachio78.addComponentOrReplace(gltfShape5);
const transform119 = new Transform({
  position: new Vector3(0.5, 0, 38),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
wallPlainPistachio78.addComponentOrReplace(transform119);

const wallPlainPistachio79 = new Entity("wallPlainPistachio79");
engine.addEntity(wallPlainPistachio79);
wallPlainPistachio79.setParent(_scene);
wallPlainPistachio79.addComponentOrReplace(gltfShape5);
const transform120 = new Transform({
  position: new Vector3(0.5, 8, 44),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
wallPlainPistachio79.addComponentOrReplace(transform120);

const wallPlainPistachio80 = new Entity("wallPlainPistachio80");
engine.addEntity(wallPlainPistachio80);
wallPlainPistachio80.setParent(_scene);
wallPlainPistachio80.addComponentOrReplace(gltfShape5);
const transform121 = new Transform({
  position: new Vector3(0.5, 4, 44),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
wallPlainPistachio80.addComponentOrReplace(transform121);

const wallPlainPistachio81 = new Entity("wallPlainPistachio81");
engine.addEntity(wallPlainPistachio81);
wallPlainPistachio81.setParent(_scene);
wallPlainPistachio81.addComponentOrReplace(gltfShape5);
const transform122 = new Transform({
  position: new Vector3(0.5, 0, 44),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
wallPlainPistachio81.addComponentOrReplace(transform122);

const wallPlainPistachio82 = new Entity("wallPlainPistachio82");
engine.addEntity(wallPlainPistachio82);
wallPlainPistachio82.setParent(_scene);
wallPlainPistachio82.addComponentOrReplace(gltfShape5);
const transform123 = new Transform({
  position: new Vector3(0.5, 8, 24),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
wallPlainPistachio82.addComponentOrReplace(transform123);

const wallPlainPistachio83 = new Entity("wallPlainPistachio83");
engine.addEntity(wallPlainPistachio83);
wallPlainPistachio83.setParent(_scene);
wallPlainPistachio83.addComponentOrReplace(gltfShape5);
const transform124 = new Transform({
  position: new Vector3(0.5, 4, 24),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
wallPlainPistachio83.addComponentOrReplace(transform124);

const wallPlainPistachio84 = new Entity("wallPlainPistachio84");
engine.addEntity(wallPlainPistachio84);
wallPlainPistachio84.setParent(_scene);
wallPlainPistachio84.addComponentOrReplace(gltfShape5);
const transform125 = new Transform({
  position: new Vector3(0.5, 0, 24),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
wallPlainPistachio84.addComponentOrReplace(transform125);

const wallPlainPistachio85 = new Entity("wallPlainPistachio85");
engine.addEntity(wallPlainPistachio85);
wallPlainPistachio85.setParent(_scene);
wallPlainPistachio85.addComponentOrReplace(gltfShape5);
const transform126 = new Transform({
  position: new Vector3(0.5, 8, 22),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537),
});
wallPlainPistachio85.addComponentOrReplace(transform126);

const wallPlainPistachio86 = new Entity("wallPlainPistachio86");
engine.addEntity(wallPlainPistachio86);
wallPlainPistachio86.setParent(_scene);
wallPlainPistachio86.addComponentOrReplace(gltfShape5);
const transform127 = new Transform({
  position: new Vector3(0.5, 4, 22),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
wallPlainPistachio86.addComponentOrReplace(transform127);

const wallPlainPistachio87 = new Entity("wallPlainPistachio87");
engine.addEntity(wallPlainPistachio87);
wallPlainPistachio87.setParent(_scene);
wallPlainPistachio87.addComponentOrReplace(gltfShape5);
const transform128 = new Transform({
  position: new Vector3(0.5, 0, 22),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
wallPlainPistachio87.addComponentOrReplace(transform128);

const wallPlainPistachio88 = new Entity("wallPlainPistachio88");
engine.addEntity(wallPlainPistachio88);
wallPlainPistachio88.setParent(_scene);
wallPlainPistachio88.addComponentOrReplace(gltfShape5);
const transform129 = new Transform({
  position: new Vector3(0.5, 8, 20),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537),
});
wallPlainPistachio88.addComponentOrReplace(transform129);

const wallPlainPistachio89 = new Entity("wallPlainPistachio89");
engine.addEntity(wallPlainPistachio89);
wallPlainPistachio89.setParent(_scene);
wallPlainPistachio89.addComponentOrReplace(gltfShape5);
const transform130 = new Transform({
  position: new Vector3(0.5, 4, 20),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
wallPlainPistachio89.addComponentOrReplace(transform130);

const wallPlainPistachio90 = new Entity("wallPlainPistachio90");
engine.addEntity(wallPlainPistachio90);
wallPlainPistachio90.setParent(_scene);
wallPlainPistachio90.addComponentOrReplace(gltfShape5);
const transform131 = new Transform({
  position: new Vector3(0.5, 0, 18),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
wallPlainPistachio90.addComponentOrReplace(transform131);

const wallPlainPistachio91 = new Entity("wallPlainPistachio91");
engine.addEntity(wallPlainPistachio91);
wallPlainPistachio91.setParent(_scene);
wallPlainPistachio91.addComponentOrReplace(gltfShape5);
const transform132 = new Transform({
  position: new Vector3(0.5, 0, 20),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
wallPlainPistachio91.addComponentOrReplace(transform132);

const wallPlainPistachio92 = new Entity("wallPlainPistachio92");
engine.addEntity(wallPlainPistachio92);
wallPlainPistachio92.setParent(_scene);
wallPlainPistachio92.addComponentOrReplace(gltfShape5);
const transform133 = new Transform({
  position: new Vector3(0.5, 4, 18),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
wallPlainPistachio92.addComponentOrReplace(transform133);

const wallPlainPistachio93 = new Entity("wallPlainPistachio93");
engine.addEntity(wallPlainPistachio93);
wallPlainPistachio93.setParent(_scene);
wallPlainPistachio93.addComponentOrReplace(gltfShape5);
const transform134 = new Transform({
  position: new Vector3(0.5, 8, 18),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537),
});
wallPlainPistachio93.addComponentOrReplace(transform134);

const wallPlainPistachio94 = new Entity("wallPlainPistachio94");
engine.addEntity(wallPlainPistachio94);
wallPlainPistachio94.setParent(_scene);
wallPlainPistachio94.addComponentOrReplace(gltfShape5);
const transform135 = new Transform({
  position: new Vector3(0.5, 8, 16),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537),
});
wallPlainPistachio94.addComponentOrReplace(transform135);

const wallPlainPistachio95 = new Entity("wallPlainPistachio95");
engine.addEntity(wallPlainPistachio95);
wallPlainPistachio95.setParent(_scene);
wallPlainPistachio95.addComponentOrReplace(gltfShape5);
const transform136 = new Transform({
  position: new Vector3(0.5, 4, 16),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
wallPlainPistachio95.addComponentOrReplace(transform136);

const wallPlainPistachio96 = new Entity("wallPlainPistachio96");
engine.addEntity(wallPlainPistachio96);
wallPlainPistachio96.setParent(_scene);
wallPlainPistachio96.addComponentOrReplace(gltfShape5);
const transform137 = new Transform({
  position: new Vector3(0.5, 0, 16),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
wallPlainPistachio96.addComponentOrReplace(transform137);

const wallPlainPistachio97 = new Entity("wallPlainPistachio97");
engine.addEntity(wallPlainPistachio97);
wallPlainPistachio97.setParent(_scene);
wallPlainPistachio97.addComponentOrReplace(gltfShape5);
const transform138 = new Transform({
  position: new Vector3(0.5, 8, 14),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328),
});
wallPlainPistachio97.addComponentOrReplace(transform138);

const wallPlainPistachio98 = new Entity("wallPlainPistachio98");
engine.addEntity(wallPlainPistachio98);
wallPlainPistachio98.setParent(_scene);
wallPlainPistachio98.addComponentOrReplace(gltfShape5);
const transform139 = new Transform({
  position: new Vector3(0.5, 4, 14),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537),
});
wallPlainPistachio98.addComponentOrReplace(transform139);

const wallPlainPistachio99 = new Entity("wallPlainPistachio99");
engine.addEntity(wallPlainPistachio99);
wallPlainPistachio99.setParent(_scene);
wallPlainPistachio99.addComponentOrReplace(gltfShape5);
const transform140 = new Transform({
  position: new Vector3(0.5, 0, 14),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
wallPlainPistachio99.addComponentOrReplace(transform140);

const wallPlainPistachio100 = new Entity("wallPlainPistachio100");
engine.addEntity(wallPlainPistachio100);
wallPlainPistachio100.setParent(_scene);
wallPlainPistachio100.addComponentOrReplace(gltfShape5);
const transform141 = new Transform({
  position: new Vector3(0.5, 8, 12),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328),
});
wallPlainPistachio100.addComponentOrReplace(transform141);

const wallPlainPistachio101 = new Entity("wallPlainPistachio101");
engine.addEntity(wallPlainPistachio101);
wallPlainPistachio101.setParent(_scene);
wallPlainPistachio101.addComponentOrReplace(gltfShape5);
const transform142 = new Transform({
  position: new Vector3(0.5, 4, 12),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537),
});
wallPlainPistachio101.addComponentOrReplace(transform142);

const wallPlainPistachio102 = new Entity("wallPlainPistachio102");
engine.addEntity(wallPlainPistachio102);
wallPlainPistachio102.setParent(_scene);
wallPlainPistachio102.addComponentOrReplace(gltfShape5);
const transform143 = new Transform({
  position: new Vector3(0.5, 0, 10),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
wallPlainPistachio102.addComponentOrReplace(transform143);

const wallPlainPistachio103 = new Entity("wallPlainPistachio103");
engine.addEntity(wallPlainPistachio103);
wallPlainPistachio103.setParent(_scene);
wallPlainPistachio103.addComponentOrReplace(gltfShape5);
const transform144 = new Transform({
  position: new Vector3(0.5, 0, 12),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
wallPlainPistachio103.addComponentOrReplace(transform144);

const wallPlainPistachio104 = new Entity("wallPlainPistachio104");
engine.addEntity(wallPlainPistachio104);
wallPlainPistachio104.setParent(_scene);
wallPlainPistachio104.addComponentOrReplace(gltfShape5);
const transform145 = new Transform({
  position: new Vector3(0.5, 4, 10),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537),
});
wallPlainPistachio104.addComponentOrReplace(transform145);

const wallPlainPistachio105 = new Entity("wallPlainPistachio105");
engine.addEntity(wallPlainPistachio105);
wallPlainPistachio105.setParent(_scene);
wallPlainPistachio105.addComponentOrReplace(gltfShape5);
const transform146 = new Transform({
  position: new Vector3(0.5, 8, 10),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328),
});
wallPlainPistachio105.addComponentOrReplace(transform146);

const wallPlainPistachio106 = new Entity("wallPlainPistachio106");
engine.addEntity(wallPlainPistachio106);
wallPlainPistachio106.setParent(_scene);
wallPlainPistachio106.addComponentOrReplace(gltfShape5);
const transform147 = new Transform({
  position: new Vector3(0.5, 8, 6),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212),
});
wallPlainPistachio106.addComponentOrReplace(transform147);

const wallPlainPistachio107 = new Entity("wallPlainPistachio107");
engine.addEntity(wallPlainPistachio107);
wallPlainPistachio107.setParent(_scene);
wallPlainPistachio107.addComponentOrReplace(gltfShape5);
const transform148 = new Transform({
  position: new Vector3(0.5, 4, 6),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328),
});
wallPlainPistachio107.addComponentOrReplace(transform148);

const wallPlainPistachio108 = new Entity("wallPlainPistachio108");
engine.addEntity(wallPlainPistachio108);
wallPlainPistachio108.setParent(_scene);
wallPlainPistachio108.addComponentOrReplace(gltfShape5);
const transform149 = new Transform({
  position: new Vector3(0.5, 0, 6),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537),
});
wallPlainPistachio108.addComponentOrReplace(transform149);

const wallPlainPistachio109 = new Entity("wallPlainPistachio109");
engine.addEntity(wallPlainPistachio109);
wallPlainPistachio109.setParent(_scene);
wallPlainPistachio109.addComponentOrReplace(gltfShape5);
const transform150 = new Transform({
  position: new Vector3(0.5, 8, 4),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791),
});
wallPlainPistachio109.addComponentOrReplace(transform150);

const wallPlainPistachio110 = new Entity("wallPlainPistachio110");
engine.addEntity(wallPlainPistachio110);
wallPlainPistachio110.setParent(_scene);
wallPlainPistachio110.addComponentOrReplace(gltfShape5);
const transform151 = new Transform({
  position: new Vector3(0.5, 4, 4),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212),
});
wallPlainPistachio110.addComponentOrReplace(transform151);

const wallPlainPistachio111 = new Entity("wallPlainPistachio111");
engine.addEntity(wallPlainPistachio111);
wallPlainPistachio111.setParent(_scene);
wallPlainPistachio111.addComponentOrReplace(gltfShape5);
const transform152 = new Transform({
  position: new Vector3(0.5, 0, 4),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328),
});
wallPlainPistachio111.addComponentOrReplace(transform152);

const wallPlainPistachio112 = new Entity("wallPlainPistachio112");
engine.addEntity(wallPlainPistachio112);
wallPlainPistachio112.setParent(_scene);
wallPlainPistachio112.addComponentOrReplace(gltfShape5);
const transform153 = new Transform({
  position: new Vector3(0.5, 8, 2),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791),
});
wallPlainPistachio112.addComponentOrReplace(transform153);

const wallPlainPistachio113 = new Entity("wallPlainPistachio113");
engine.addEntity(wallPlainPistachio113);
wallPlainPistachio113.setParent(_scene);
wallPlainPistachio113.addComponentOrReplace(gltfShape5);
const transform154 = new Transform({
  position: new Vector3(0.5, 4, 2),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212),
});
wallPlainPistachio113.addComponentOrReplace(transform154);

const wallPlainPistachio114 = new Entity("wallPlainPistachio114");
engine.addEntity(wallPlainPistachio114);
wallPlainPistachio114.setParent(_scene);
wallPlainPistachio114.addComponentOrReplace(gltfShape5);
const transform155 = new Transform({
  position: new Vector3(0.5, 0, 0),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328),
});
wallPlainPistachio114.addComponentOrReplace(transform155);

const wallPlainPistachio115 = new Entity("wallPlainPistachio115");
engine.addEntity(wallPlainPistachio115);
wallPlainPistachio115.setParent(_scene);
wallPlainPistachio115.addComponentOrReplace(gltfShape5);
const transform156 = new Transform({
  position: new Vector3(0.5, 0, 2),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328),
});
wallPlainPistachio115.addComponentOrReplace(transform156);

const wallPlainPistachio116 = new Entity("wallPlainPistachio116");
engine.addEntity(wallPlainPistachio116);
wallPlainPistachio116.setParent(_scene);
wallPlainPistachio116.addComponentOrReplace(gltfShape5);
const transform157 = new Transform({
  position: new Vector3(0.5, 4, 0),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212),
});
wallPlainPistachio116.addComponentOrReplace(transform157);

const wallPlainPistachio117 = new Entity("wallPlainPistachio117");
engine.addEntity(wallPlainPistachio117);
wallPlainPistachio117.setParent(_scene);
wallPlainPistachio117.addComponentOrReplace(gltfShape5);
const transform158 = new Transform({
  position: new Vector3(0.5, 8, 0),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791),
});
wallPlainPistachio117.addComponentOrReplace(transform158);

const wallPlainPistachio118 = new Entity("wallPlainPistachio118");
engine.addEntity(wallPlainPistachio118);
wallPlainPistachio118.setParent(_scene);
wallPlainPistachio118.addComponentOrReplace(gltfShape5);
const transform159 = new Transform({
  position: new Vector3(15.5, 8, 5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283),
});
wallPlainPistachio118.addComponentOrReplace(transform159);

const wallPlainPistachio119 = new Entity("wallPlainPistachio119");
engine.addEntity(wallPlainPistachio119);
wallPlainPistachio119.setParent(_scene);
wallPlainPistachio119.addComponentOrReplace(gltfShape5);
const transform160 = new Transform({
  position: new Vector3(15.5, 4, 5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492),
});
wallPlainPistachio119.addComponentOrReplace(transform160);

const wallPlainPistachio120 = new Entity("wallPlainPistachio120");
engine.addEntity(wallPlainPistachio120);
wallPlainPistachio120.setParent(_scene);
wallPlainPistachio120.addComponentOrReplace(gltfShape5);
const transform161 = new Transform({
  position: new Vector3(15.5, 0, 5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701),
});
wallPlainPistachio120.addComponentOrReplace(transform161);

const wallPlainPistachio121 = new Entity("wallPlainPistachio121");
engine.addEntity(wallPlainPistachio121);
wallPlainPistachio121.setParent(_scene);
wallPlainPistachio121.addComponentOrReplace(gltfShape5);
const transform162 = new Transform({
  position: new Vector3(15.5, 8, 3),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074),
});
wallPlainPistachio121.addComponentOrReplace(transform162);

const wallPlainPistachio122 = new Entity("wallPlainPistachio122");
engine.addEntity(wallPlainPistachio122);
wallPlainPistachio122.setParent(_scene);
wallPlainPistachio122.addComponentOrReplace(gltfShape5);
const transform163 = new Transform({
  position: new Vector3(15.5, 4, 3),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283),
});
wallPlainPistachio122.addComponentOrReplace(transform163);

const wallPlainPistachio123 = new Entity("wallPlainPistachio123");
engine.addEntity(wallPlainPistachio123);
wallPlainPistachio123.setParent(_scene);
wallPlainPistachio123.addComponentOrReplace(gltfShape5);
const transform164 = new Transform({
  position: new Vector3(15.5, 0, 3),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492),
});
wallPlainPistachio123.addComponentOrReplace(transform164);

const wallPlainPistachio124 = new Entity("wallPlainPistachio124");
engine.addEntity(wallPlainPistachio124);
wallPlainPistachio124.setParent(_scene);
wallPlainPistachio124.addComponentOrReplace(gltfShape5);
const transform165 = new Transform({
  position: new Vector3(15.5, 8, 1),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074),
});
wallPlainPistachio124.addComponentOrReplace(transform165);

const wallPlainPistachio125 = new Entity("wallPlainPistachio125");
engine.addEntity(wallPlainPistachio125);
wallPlainPistachio125.setParent(_scene);
wallPlainPistachio125.addComponentOrReplace(gltfShape5);
const transform166 = new Transform({
  position: new Vector3(15.5, 4, 1),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283),
});
wallPlainPistachio125.addComponentOrReplace(transform166);

const wallPlainPistachio126 = new Entity("wallPlainPistachio126");
engine.addEntity(wallPlainPistachio126);
wallPlainPistachio126.setParent(_scene);
wallPlainPistachio126.addComponentOrReplace(gltfShape5);
const transform167 = new Transform({
  position: new Vector3(15.5, 0, 0.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492),
});
wallPlainPistachio126.addComponentOrReplace(transform167);

const wallPlainPistachio127 = new Entity("wallPlainPistachio127");
engine.addEntity(wallPlainPistachio127);
wallPlainPistachio127.setParent(_scene);
wallPlainPistachio127.addComponentOrReplace(gltfShape5);
const transform168 = new Transform({
  position: new Vector3(15.5, 0, 1),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492),
});
wallPlainPistachio127.addComponentOrReplace(transform168);

const wallPlainPistachio128 = new Entity("wallPlainPistachio128");
engine.addEntity(wallPlainPistachio128);
wallPlainPistachio128.setParent(_scene);
wallPlainPistachio128.addComponentOrReplace(gltfShape5);
const transform169 = new Transform({
  position: new Vector3(15.5, 4, 0.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283),
});
wallPlainPistachio128.addComponentOrReplace(transform169);

const wallPlainPistachio129 = new Entity("wallPlainPistachio129");
engine.addEntity(wallPlainPistachio129);
wallPlainPistachio129.setParent(_scene);
wallPlainPistachio129.addComponentOrReplace(gltfShape5);
const transform170 = new Transform({
  position: new Vector3(15.5, 8, 0.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074),
});
wallPlainPistachio129.addComponentOrReplace(transform170);

const wallPlainPistachio130 = new Entity("wallPlainPistachio130");
engine.addEntity(wallPlainPistachio130);
wallPlainPistachio130.setParent(_scene);
wallPlainPistachio130.addComponentOrReplace(gltfShape5);
const transform171 = new Transform({
  position: new Vector3(15.5, 8, 13),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074),
});
wallPlainPistachio130.addComponentOrReplace(transform171);

const wallPlainPistachio131 = new Entity("wallPlainPistachio131");
engine.addEntity(wallPlainPistachio131);
wallPlainPistachio131.setParent(_scene);
wallPlainPistachio131.addComponentOrReplace(gltfShape5);
const transform172 = new Transform({
  position: new Vector3(15.5, 4, 13),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283),
});
wallPlainPistachio131.addComponentOrReplace(transform172);

const wallPlainPistachio132 = new Entity("wallPlainPistachio132");
engine.addEntity(wallPlainPistachio132);
wallPlainPistachio132.setParent(_scene);
wallPlainPistachio132.addComponentOrReplace(gltfShape5);
const transform173 = new Transform({
  position: new Vector3(15.5, 0, 13),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492),
});
wallPlainPistachio132.addComponentOrReplace(transform173);

const wallPlainPistachio133 = new Entity("wallPlainPistachio133");
engine.addEntity(wallPlainPistachio133);
wallPlainPistachio133.setParent(_scene);
wallPlainPistachio133.addComponentOrReplace(gltfShape5);
const transform174 = new Transform({
  position: new Vector3(15.5, 8, 11),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865),
});
wallPlainPistachio133.addComponentOrReplace(transform174);

const wallPlainPistachio134 = new Entity("wallPlainPistachio134");
engine.addEntity(wallPlainPistachio134);
wallPlainPistachio134.setParent(_scene);
wallPlainPistachio134.addComponentOrReplace(gltfShape5);
const transform175 = new Transform({
  position: new Vector3(15.5, 4, 11),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074),
});
wallPlainPistachio134.addComponentOrReplace(transform175);

const wallPlainPistachio135 = new Entity("wallPlainPistachio135");
engine.addEntity(wallPlainPistachio135);
wallPlainPistachio135.setParent(_scene);
wallPlainPistachio135.addComponentOrReplace(gltfShape5);
const transform176 = new Transform({
  position: new Vector3(15.5, 0, 11),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283),
});
wallPlainPistachio135.addComponentOrReplace(transform176);

const wallPlainPistachio136 = new Entity("wallPlainPistachio136");
engine.addEntity(wallPlainPistachio136);
wallPlainPistachio136.setParent(_scene);
wallPlainPistachio136.addComponentOrReplace(gltfShape5);
const transform177 = new Transform({
  position: new Vector3(15.5, 8, 9),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865),
});
wallPlainPistachio136.addComponentOrReplace(transform177);

const wallPlainPistachio137 = new Entity("wallPlainPistachio137");
engine.addEntity(wallPlainPistachio137);
wallPlainPistachio137.setParent(_scene);
wallPlainPistachio137.addComponentOrReplace(gltfShape5);
const transform178 = new Transform({
  position: new Vector3(15.5, 4, 9),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074),
});
wallPlainPistachio137.addComponentOrReplace(transform178);

const wallPlainPistachio138 = new Entity("wallPlainPistachio138");
engine.addEntity(wallPlainPistachio138);
wallPlainPistachio138.setParent(_scene);
wallPlainPistachio138.addComponentOrReplace(gltfShape5);
const transform179 = new Transform({
  position: new Vector3(15.5, 0, 7),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283),
});
wallPlainPistachio138.addComponentOrReplace(transform179);

const wallPlainPistachio139 = new Entity("wallPlainPistachio139");
engine.addEntity(wallPlainPistachio139);
wallPlainPistachio139.setParent(_scene);
wallPlainPistachio139.addComponentOrReplace(gltfShape5);
const transform180 = new Transform({
  position: new Vector3(15.5, 0, 9),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283),
});
wallPlainPistachio139.addComponentOrReplace(transform180);

const wallPlainPistachio140 = new Entity("wallPlainPistachio140");
engine.addEntity(wallPlainPistachio140);
wallPlainPistachio140.setParent(_scene);
wallPlainPistachio140.addComponentOrReplace(gltfShape5);
const transform181 = new Transform({
  position: new Vector3(15.5, 4, 7),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074),
});
wallPlainPistachio140.addComponentOrReplace(transform181);

const wallPlainPistachio141 = new Entity("wallPlainPistachio141");
engine.addEntity(wallPlainPistachio141);
wallPlainPistachio141.setParent(_scene);
wallPlainPistachio141.addComponentOrReplace(gltfShape5);
const transform182 = new Transform({
  position: new Vector3(15.5, 8, 7),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865),
});
wallPlainPistachio141.addComponentOrReplace(transform182);

const wallPlainPistachio142 = new Entity("wallPlainPistachio142");
engine.addEntity(wallPlainPistachio142);
wallPlainPistachio142.setParent(_scene);
wallPlainPistachio142.addComponentOrReplace(gltfShape5);
const transform183 = new Transform({
  position: new Vector3(15.5, 8, 45.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447),
});
wallPlainPistachio142.addComponentOrReplace(transform183);

const wallPlainPistachio143 = new Entity("wallPlainPistachio143");
engine.addEntity(wallPlainPistachio143);
wallPlainPistachio143.setParent(_scene);
wallPlainPistachio143.addComponentOrReplace(gltfShape5);
const transform184 = new Transform({
  position: new Vector3(15.5, 4, 45.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000038146972656, 1, 1.0000038146972656),
});
wallPlainPistachio143.addComponentOrReplace(transform184);

const wallPlainPistachio144 = new Entity("wallPlainPistachio144");
engine.addEntity(wallPlainPistachio144);
wallPlainPistachio144.setParent(_scene);
wallPlainPistachio144.addComponentOrReplace(gltfShape5);
const transform185 = new Transform({
  position: new Vector3(15.5, 0, 45.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865),
});
wallPlainPistachio144.addComponentOrReplace(transform185);

const wallPlainPistachio145 = new Entity("wallPlainPistachio145");
engine.addEntity(wallPlainPistachio145);
wallPlainPistachio145.setParent(_scene);
wallPlainPistachio145.addComponentOrReplace(gltfShape5);
const transform186 = new Transform({
  position: new Vector3(15.5, 8, 43.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238),
});
wallPlainPistachio145.addComponentOrReplace(transform186);

const wallPlainPistachio146 = new Entity("wallPlainPistachio146");
engine.addEntity(wallPlainPistachio146);
wallPlainPistachio146.setParent(_scene);
wallPlainPistachio146.addComponentOrReplace(gltfShape5);
const transform187 = new Transform({
  position: new Vector3(15.5, 4, 43.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447),
});
wallPlainPistachio146.addComponentOrReplace(transform187);

const wallPlainPistachio147 = new Entity("wallPlainPistachio147");
engine.addEntity(wallPlainPistachio147);
wallPlainPistachio147.setParent(_scene);
wallPlainPistachio147.addComponentOrReplace(gltfShape5);
const transform188 = new Transform({
  position: new Vector3(15.5, 0, 43.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000038146972656, 1, 1.0000038146972656),
});
wallPlainPistachio147.addComponentOrReplace(transform188);

const wallPlainPistachio148 = new Entity("wallPlainPistachio148");
engine.addEntity(wallPlainPistachio148);
wallPlainPistachio148.setParent(_scene);
wallPlainPistachio148.addComponentOrReplace(gltfShape5);
const transform189 = new Transform({
  position: new Vector3(15.5, 8, 41.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238),
});
wallPlainPistachio148.addComponentOrReplace(transform189);

const wallPlainPistachio149 = new Entity("wallPlainPistachio149");
engine.addEntity(wallPlainPistachio149);
wallPlainPistachio149.setParent(_scene);
wallPlainPistachio149.addComponentOrReplace(gltfShape5);
const transform190 = new Transform({
  position: new Vector3(15.5, 4, 41.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447),
});
wallPlainPistachio149.addComponentOrReplace(transform190);

const wallPlainPistachio150 = new Entity("wallPlainPistachio150");
engine.addEntity(wallPlainPistachio150);
wallPlainPistachio150.setParent(_scene);
wallPlainPistachio150.addComponentOrReplace(gltfShape5);
const transform191 = new Transform({
  position: new Vector3(15.5, 0, 39.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000038146972656, 1, 1.0000038146972656),
});
wallPlainPistachio150.addComponentOrReplace(transform191);

const wallPlainPistachio151 = new Entity("wallPlainPistachio151");
engine.addEntity(wallPlainPistachio151);
wallPlainPistachio151.setParent(_scene);
wallPlainPistachio151.addComponentOrReplace(gltfShape5);
const transform192 = new Transform({
  position: new Vector3(15.5, 0, 41.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000038146972656, 1, 1.0000038146972656),
});
wallPlainPistachio151.addComponentOrReplace(transform192);

const wallPlainPistachio152 = new Entity("wallPlainPistachio152");
engine.addEntity(wallPlainPistachio152);
wallPlainPistachio152.setParent(_scene);
wallPlainPistachio152.addComponentOrReplace(gltfShape5);
const transform193 = new Transform({
  position: new Vector3(15.5, 4, 39.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447),
});
wallPlainPistachio152.addComponentOrReplace(transform193);

const wallPlainPistachio153 = new Entity("wallPlainPistachio153");
engine.addEntity(wallPlainPistachio153);
wallPlainPistachio153.setParent(_scene);
wallPlainPistachio153.addComponentOrReplace(gltfShape5);
const transform194 = new Transform({
  position: new Vector3(15.5, 8, 39.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238),
});
wallPlainPistachio153.addComponentOrReplace(transform194);

const wallPlainPistachio154 = new Entity("wallPlainPistachio154");
engine.addEntity(wallPlainPistachio154);
wallPlainPistachio154.setParent(_scene);
wallPlainPistachio154.addComponentOrReplace(gltfShape5);
const transform195 = new Transform({
  position: new Vector3(15.5, 8, 37.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238),
});
wallPlainPistachio154.addComponentOrReplace(transform195);

const wallPlainPistachio155 = new Entity("wallPlainPistachio155");
engine.addEntity(wallPlainPistachio155);
wallPlainPistachio155.setParent(_scene);
wallPlainPistachio155.addComponentOrReplace(gltfShape5);
const transform196 = new Transform({
  position: new Vector3(15.5, 4, 37.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447),
});
wallPlainPistachio155.addComponentOrReplace(transform196);

const wallPlainPistachio156 = new Entity("wallPlainPistachio156");
engine.addEntity(wallPlainPistachio156);
wallPlainPistachio156.setParent(_scene);
wallPlainPistachio156.addComponentOrReplace(gltfShape5);
const transform197 = new Transform({
  position: new Vector3(15.5, 0, 37.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000038146972656, 1, 1.0000038146972656),
});
wallPlainPistachio156.addComponentOrReplace(transform197);

const wallPlainPistachio157 = new Entity("wallPlainPistachio157");
engine.addEntity(wallPlainPistachio157);
wallPlainPistachio157.setParent(_scene);
wallPlainPistachio157.addComponentOrReplace(gltfShape5);
const transform198 = new Transform({
  position: new Vector3(15.5, 8, 35.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000004529953003, 1, 1.000004529953003),
});
wallPlainPistachio157.addComponentOrReplace(transform198);

const wallPlainPistachio158 = new Entity("wallPlainPistachio158");
engine.addEntity(wallPlainPistachio158);
wallPlainPistachio158.setParent(_scene);
wallPlainPistachio158.addComponentOrReplace(gltfShape5);
const transform199 = new Transform({
  position: new Vector3(15.5, 4, 35.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238),
});
wallPlainPistachio158.addComponentOrReplace(transform199);

const wallPlainPistachio159 = new Entity("wallPlainPistachio159");
engine.addEntity(wallPlainPistachio159);
wallPlainPistachio159.setParent(_scene);
wallPlainPistachio159.addComponentOrReplace(gltfShape5);
const transform200 = new Transform({
  position: new Vector3(15.5, 0, 35.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447),
});
wallPlainPistachio159.addComponentOrReplace(transform200);

const wallPlainPistachio160 = new Entity("wallPlainPistachio160");
engine.addEntity(wallPlainPistachio160);
wallPlainPistachio160.setParent(_scene);
wallPlainPistachio160.addComponentOrReplace(gltfShape5);
const transform201 = new Transform({
  position: new Vector3(15.5, 8, 33.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000004529953003, 1, 1.000004529953003),
});
wallPlainPistachio160.addComponentOrReplace(transform201);

const wallPlainPistachio161 = new Entity("wallPlainPistachio161");
engine.addEntity(wallPlainPistachio161);
wallPlainPistachio161.setParent(_scene);
wallPlainPistachio161.addComponentOrReplace(gltfShape5);
const transform202 = new Transform({
  position: new Vector3(15.5, 4, 33.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238),
});
wallPlainPistachio161.addComponentOrReplace(transform202);

const wallPlainPistachio162 = new Entity("wallPlainPistachio162");
engine.addEntity(wallPlainPistachio162);
wallPlainPistachio162.setParent(_scene);
wallPlainPistachio162.addComponentOrReplace(gltfShape5);
const transform203 = new Transform({
  position: new Vector3(15.5, 0, 31.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447),
});
wallPlainPistachio162.addComponentOrReplace(transform203);

const wallPlainPistachio163 = new Entity("wallPlainPistachio163");
engine.addEntity(wallPlainPistachio163);
wallPlainPistachio163.setParent(_scene);
wallPlainPistachio163.addComponentOrReplace(gltfShape5);
const transform204 = new Transform({
  position: new Vector3(15.5, 0, 33.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447),
});
wallPlainPistachio163.addComponentOrReplace(transform204);

const wallPlainPistachio164 = new Entity("wallPlainPistachio164");
engine.addEntity(wallPlainPistachio164);
wallPlainPistachio164.setParent(_scene);
wallPlainPistachio164.addComponentOrReplace(gltfShape5);
const transform205 = new Transform({
  position: new Vector3(15.5, 4, 31.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238),
});
wallPlainPistachio164.addComponentOrReplace(transform205);

const wallPlainPistachio165 = new Entity("wallPlainPistachio165");
engine.addEntity(wallPlainPistachio165);
wallPlainPistachio165.setParent(_scene);
wallPlainPistachio165.addComponentOrReplace(gltfShape5);
const transform206 = new Transform({
  position: new Vector3(15.5, 8, 31.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000004529953003, 1, 1.000004529953003),
});
wallPlainPistachio165.addComponentOrReplace(transform206);

const wallPlainPistachio166 = new Entity("wallPlainPistachio166");
engine.addEntity(wallPlainPistachio166);
wallPlainPistachio166.setParent(_scene);
wallPlainPistachio166.addComponentOrReplace(gltfShape5);
const transform207 = new Transform({
  position: new Vector3(0.5, 0, 8),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328),
});
wallPlainPistachio166.addComponentOrReplace(transform207);

const wallPlainPistachio167 = new Entity("wallPlainPistachio167");
engine.addEntity(wallPlainPistachio167);
wallPlainPistachio167.setParent(_scene);
wallPlainPistachio167.addComponentOrReplace(gltfShape5);
const transform208 = new Transform({
  position: new Vector3(0.5, 4, 8),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212),
});
wallPlainPistachio167.addComponentOrReplace(transform208);

const wallPlainPistachio168 = new Entity("wallPlainPistachio168");
engine.addEntity(wallPlainPistachio168);
wallPlainPistachio168.setParent(_scene);
wallPlainPistachio168.addComponentOrReplace(gltfShape5);
const transform209 = new Transform({
  position: new Vector3(0.5, 8, 8),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791),
});
wallPlainPistachio168.addComponentOrReplace(transform209);

const lilypad3 = new Entity("lilypad3");
engine.addEntity(lilypad3);
lilypad3.setParent(_scene);
lilypad3.addComponentOrReplace(gltfShape4);
const transform210 = new Transform({
  position: new Vector3(9, 0.5, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
lilypad3.addComponentOrReplace(transform210);

const lilypad4 = new Entity("lilypad4");
engine.addEntity(lilypad4);
lilypad4.setParent(_scene);
lilypad4.addComponentOrReplace(gltfShape4);
const transform211 = new Transform({
  position: new Vector3(7.5, 0.5, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
lilypad4.addComponentOrReplace(transform211);

const lilypad5 = new Entity("lilypad5");
engine.addEntity(lilypad5);
lilypad5.setParent(_scene);
lilypad5.addComponentOrReplace(gltfShape4);
const transform212 = new Transform({
  position: new Vector3(5, 0.5, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
lilypad5.addComponentOrReplace(transform212);

const lilypad6 = new Entity("lilypad6");
engine.addEntity(lilypad6);
lilypad6.setParent(_scene);
lilypad6.addComponentOrReplace(gltfShape4);
const transform213 = new Transform({
  position: new Vector3(9, 0.5, 43.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
lilypad6.addComponentOrReplace(transform213);

// const boundarySizeZMin = 2;
// const boundarySizeZMax = parcelsCountZ * 16 - 2;
// let timer = 0;

// initial fish creation logic
// fishEntities.forEach((fishEntity) => {
//   fishEntity.setParent(_scene);
//   engine.addEntity(fishEntity);
// });

// const redFish = new Entity("redFish");
// engine.addEntity(redFish);
// redFish.setParent(_scene);
// const transform214 = new Transform({
//   position: new Vector3(4.5, 1, 2),
//   rotation: new Quaternion(1, -1, 1, 1),
//   scale: new Vector3(1, 1, 1),
// });
// redFish.addComponentOrReplace(transform214);
// const gltfShape6 = new GLTFShape(
//   "7b804637-e9d5-4a4b-a028-265e162453b2/Fish_02/Fish_02.glb"
// );
// gltfShape6.withCollisions = true;
// gltfShape6.isPointerBlocker = true;
// gltfShape6.visible = true;
// redFish.addComponentOrReplace(gltfShape6);
// redFish.addComponentOrReplace(new Timer(FISH_CONSTANTS.TIMER_LENGTH));
// redFish.addComponentOrReplace(
//   new SpeedAndJump(getRandomSpeed(), getRandomJump())
// );

// const exoticFish = new Entity("exoticFish");
// engine.addEntity(exoticFish);
// exoticFish.setParent(_scene);
// const transform215 = new Transform({
//   position: new Vector3(6.5, 1, 2),
//   rotation: new Quaternion(1, -1, 1, 1),
//   scale: new Vector3(1, 1, 1),
// });
// exoticFish.addComponentOrReplace(transform215);
// const gltfShape7 = new GLTFShape(
//   "3c68ce69-6066-4b58-9417-f930fb8bb17d/Fish_04/Fish_04.glb"
// );
// gltfShape7.withCollisions = true;
// gltfShape7.isPointerBlocker = true;
// gltfShape7.visible = true;
// exoticFish.addComponentOrReplace(gltfShape7);
// exoticFish.addComponentOrReplace(new Timer(FISH_CONSTANTS.TIMER_LENGTH));
// exoticFish.addComponentOrReplace(
//   new SpeedAndJump(getRandomSpeed(), getRandomJump())
// );

// const greenFish = new Entity("greenFish");
// engine.addEntity(greenFish);
// greenFish.setParent(_scene);
// const transform216 = new Transform({
//   position: new Vector3(8.5, 1, 2),
//   rotation: new Quaternion(1, -1, 1, 1),
//   scale: new Vector3(1, 1, 1),
// });
// greenFish.addComponentOrReplace(transform216);
// const gltfShape8 = new GLTFShape(
//   "d491889d-7721-4a5e-89be-180f1f96feaa/Fish_03/Fish_03.glb"
// );
// gltfShape8.withCollisions = true;
// gltfShape8.isPointerBlocker = true;
// gltfShape8.visible = true;
// greenFish.addComponentOrReplace(gltfShape8);
// greenFish.addComponentOrReplace(new Timer(FISH_CONSTANTS.TIMER_LENGTH));
// greenFish.addComponentOrReplace(
//   new SpeedAndJump(getRandomSpeed(), getRandomJump())
// );

const greenTallSquaredTree = new Entity("greenTallSquaredTree");
engine.addEntity(greenTallSquaredTree);
greenTallSquaredTree.setParent(_scene);
const transform217 = new Transform({
  position: new Vector3(13.5, 0, 46),
  rotation: new Quaternion(
    2.820412455982539e-16,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373),
});
greenTallSquaredTree.addComponentOrReplace(transform217);
const gltfShape9 = new GLTFShape(
  "98f35970-9633-410d-883b-493350654bc9/TreeTall_02/TreeTall_02.glb"
);
gltfShape9.withCollisions = true;
gltfShape9.isPointerBlocker = true;
gltfShape9.visible = true;
greenTallSquaredTree.addComponentOrReplace(gltfShape9);

const greenTallSquaredTree2 = new Entity("greenTallSquaredTree2");
engine.addEntity(greenTallSquaredTree2);
greenTallSquaredTree2.setParent(_scene);
greenTallSquaredTree2.addComponentOrReplace(gltfShape9);
const transform218 = new Transform({
  position: new Vector3(14, 0, 3),
  rotation: new Quaternion(
    2.820412455982539e-16,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
greenTallSquaredTree2.addComponentOrReplace(transform218);

const evergreenShrub = new Entity("evergreenShrub");
engine.addEntity(evergreenShrub);
evergreenShrub.setParent(_scene);
const transform219 = new Transform({
  position: new Vector3(3, 4, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
evergreenShrub.addComponentOrReplace(transform219);
const gltfShape10 = new GLTFShape(
  "0d4f1e28-c9bd-4f3e-9605-c76c84702742/Bush_03/Bush_03.glb"
);
gltfShape10.withCollisions = true;
gltfShape10.isPointerBlocker = true;
gltfShape10.visible = true;
evergreenShrub.addComponentOrReplace(gltfShape10);

const evergreenShrub2 = new Entity("evergreenShrub2");
engine.addEntity(evergreenShrub2);
evergreenShrub2.setParent(_scene);
evergreenShrub2.addComponentOrReplace(gltfShape10);
const transform220 = new Transform({
  position: new Vector3(2.5, 9, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
evergreenShrub2.addComponentOrReplace(transform220);

const evergreenShrub3 = new Entity("evergreenShrub3");
engine.addEntity(evergreenShrub3);
evergreenShrub3.setParent(_scene);
evergreenShrub3.addComponentOrReplace(gltfShape10);
const transform221 = new Transform({
  position: new Vector3(3, 4, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
evergreenShrub3.addComponentOrReplace(transform221);

const evergreenShrub4 = new Entity("evergreenShrub4");
engine.addEntity(evergreenShrub4);
evergreenShrub4.setParent(_scene);
evergreenShrub4.addComponentOrReplace(gltfShape10);
const transform222 = new Transform({
  position: new Vector3(2, 9, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
evergreenShrub4.addComponentOrReplace(transform222);

const evergreenShrub5 = new Entity("evergreenShrub5");
engine.addEntity(evergreenShrub5);
evergreenShrub5.setParent(_scene);
evergreenShrub5.addComponentOrReplace(gltfShape10);
const transform223 = new Transform({
  position: new Vector3(2.5, 4, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
evergreenShrub5.addComponentOrReplace(transform223);

const entity = new Entity("entity");
engine.addEntity(entity);
entity.setParent(_scene);
const gltfShape11 = new GLTFShape(
  "d93e1fad-b131-4fe2-9843-14eae6f2b08e/FloorBaseDirt_01/FloorBaseDirt_01.glb"
);
gltfShape11.withCollisions = true;
gltfShape11.isPointerBlocker = true;
gltfShape11.visible = true;
entity.addComponentOrReplace(gltfShape11);
const transform224 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity.addComponentOrReplace(transform224);

const entity2 = new Entity("entity2");
engine.addEntity(entity2);
entity2.setParent(_scene);
entity2.addComponentOrReplace(gltfShape11);
const transform225 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity2.addComponentOrReplace(transform225);

const entity3 = new Entity("entity3");
engine.addEntity(entity3);
entity3.setParent(_scene);
entity3.addComponentOrReplace(gltfShape11);
const transform226 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity3.addComponentOrReplace(transform226);

const flowerSprouts = new Entity("flowerSprouts");
engine.addEntity(flowerSprouts);
flowerSprouts.setParent(_scene);
const transform227 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
flowerSprouts.addComponentOrReplace(transform227);
const gltfShape12 = new GLTFShape(
  "bf0962d5-8904-4f4a-b2b6-9f4607ba1e0d/Plant_03/Plant_03.glb"
);
gltfShape12.withCollisions = true;
gltfShape12.isPointerBlocker = true;
gltfShape12.visible = true;
flowerSprouts.addComponentOrReplace(gltfShape12);

const grassSprout = new Entity("grassSprout");
engine.addEntity(grassSprout);
grassSprout.setParent(_scene);
const transform228 = new Transform({
  position: new Vector3(4, 0, 33.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
grassSprout.addComponentOrReplace(transform228);
const gltfShape13 = new GLTFShape(
  "43ab9bc6-bc2a-4ee1-815a-e12f60a709ae/Grass_03/Grass_03.glb"
);
gltfShape13.withCollisions = true;
gltfShape13.isPointerBlocker = true;
gltfShape13.visible = true;
grassSprout.addComponentOrReplace(gltfShape13);

const kangarooPaws = new Entity("kangarooPaws");
engine.addEntity(kangarooPaws);
kangarooPaws.setParent(_scene);
const transform229 = new Transform({
  position: new Vector3(9, 0, 39.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
kangarooPaws.addComponentOrReplace(transform229);
const gltfShape14 = new GLTFShape(
  "39494fdb-7107-4dac-9412-a113586ffcda/Plant_05/Plant_05.glb"
);
gltfShape14.withCollisions = true;
gltfShape14.isPointerBlocker = true;
gltfShape14.visible = true;
kangarooPaws.addComponentOrReplace(gltfShape14);

const grassSprout2 = new Entity("grassSprout2");
engine.addEntity(grassSprout2);
grassSprout2.setParent(_scene);
grassSprout2.addComponentOrReplace(gltfShape13);
const transform230 = new Transform({
  position: new Vector3(5.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
grassSprout2.addComponentOrReplace(transform230);

const ostrichFerns = new Entity("ostrichFerns");
engine.addEntity(ostrichFerns);
ostrichFerns.setParent(_scene);
const transform231 = new Transform({
  position: new Vector3(11, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
ostrichFerns.addComponentOrReplace(transform231);
const gltfShape15 = new GLTFShape(
  "af9213a3-3310-4564-9633-dd56815c85fa/Grass_02/Grass_02.glb"
);
gltfShape15.withCollisions = true;
gltfShape15.isPointerBlocker = true;
gltfShape15.visible = true;
ostrichFerns.addComponentOrReplace(gltfShape15);

const ostrichFerns2 = new Entity("ostrichFerns2");
engine.addEntity(ostrichFerns2);
ostrichFerns2.setParent(_scene);
ostrichFerns2.addComponentOrReplace(gltfShape15);
const transform232 = new Transform({
  position: new Vector3(5, 0, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
ostrichFerns2.addComponentOrReplace(transform232);

const pebble = new Entity("pebble");
engine.addEntity(pebble);
pebble.setParent(_scene);
const transform233 = new Transform({
  position: new Vector3(8, 0, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
pebble.addComponentOrReplace(transform233);
const gltfShape16 = new GLTFShape(
  "1293e8b4-4b43-42ac-aa63-7a43fcc8789c/Pebble_01/Pebble_01.glb"
);
gltfShape16.withCollisions = true;
gltfShape16.isPointerBlocker = true;
gltfShape16.visible = true;
pebble.addComponentOrReplace(gltfShape16);

const sweetPea = new Entity("sweetPea");
engine.addEntity(sweetPea);
sweetPea.setParent(_scene);
const transform234 = new Transform({
  position: new Vector3(13, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
sweetPea.addComponentOrReplace(transform234);
const gltfShape17 = new GLTFShape(
  "8b69ff81-da01-4334-bfc1-281a42c810e3/Plant_04/Plant_04.glb"
);
gltfShape17.withCollisions = true;
gltfShape17.isPointerBlocker = true;
gltfShape17.visible = true;
sweetPea.addComponentOrReplace(gltfShape17);

const sunflowerHead = new Entity("sunflowerHead");
engine.addEntity(sunflowerHead);
sunflowerHead.setParent(_scene);
const transform235 = new Transform({
  position: new Vector3(9.5, 0, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
sunflowerHead.addComponentOrReplace(transform235);
const gltfShape18 = new GLTFShape(
  "29198994-d436-4b4b-8314-cfa2c4306dd9/Flower_01/Flower_01.glb"
);
gltfShape18.withCollisions = true;
gltfShape18.isPointerBlocker = true;
gltfShape18.visible = true;
sunflowerHead.addComponentOrReplace(gltfShape18);

/**************************************   Dynamic Code Start HERE   ****************************************/

const gameScore = new Score();
const gameLevel = new Level();

const scoreCanvas = new UICanvas();

// Create a textShape component, setting the canvas as parent
const scoreText = new UIText(scoreCanvas);
scoreText.value = "Score: " + gameScore.score;
scoreText.positionY = "50%";
scoreText.positionX = "43%";
scoreText.fontSize = 20;

const canvas = new UICanvas();

// Abstracts all the boards and text
const storyBoard = new UIContainerRect(canvas);
storyBoard.width = "70%";
storyBoard.height = "30%";
storyBoard.color = Color4.Magenta();
storyBoard.opacity = 0.5;
storyBoard.positionY = "30%";
storyBoard.hAlign = "center";
storyBoard.visible = false;

const storyBoardHeading = new UIText(storyBoard);
storyBoardHeading.value = "Story Line #" + (gameLevel.level + 1);
storyBoardHeading.width = "25%";
storyBoardHeading.vAlign = "top";
storyBoardHeading.hAlign = "center";
storyBoardHeading.fontSize = 32;
storyBoardHeading.color = Color4.Yellow();

const storyBoardText = new UIText(storyBoard);
storyBoardText.value = "";
storyBoardText.fontSize = 20;
storyBoardText.textWrapping = true;
storyBoardText.width = "70%";
storyBoardText.hAlign = "center";
storyBoardText.positionY = "-10%";

const polkaDotBoard = new UIContainerRect(canvas);
polkaDotBoard.width = "50%";
polkaDotBoard.height = "30%";
polkaDotBoard.color = Color4.Purple();
polkaDotBoard.opacity = 0.5;
polkaDotBoard.positionY = "-20%";
polkaDotBoard.hAlign = "center";
polkaDotBoard.visible = false;

//TODO: move all texts to constants
const polkaDotText = new UIText(polkaDotBoard);
polkaDotText.value =
  "Congrats, You won a PolkaDot Fish.\n\nCheckout PolkaDot and the amazing work they are doing at https://polkadot.network";
polkaDotText.fontSize = 20;
polkaDotText.textWrapping = true;
polkaDotText.width = "70%";
polkaDotText.hAlign = "center";
polkaDotText.vAlign = "center";
polkaDotText.hTextAlign = "center";
polkaDotText.vTextAlign = "center";

const greetBoard = new UIContainerRect(canvas);
greetBoard.width = "60%";
greetBoard.height = "40%";
greetBoard.color = Color4.Blue();
greetBoard.opacity = 0.5;
greetBoard.positionY = "35%";
greetBoard.hAlign = "center";
greetBoard.visible = true;

const greetBoardText = new UIText(greetBoard);
greetBoardText.value =
  'Hi there,\n\n Welcome to "Mission Sawalmem"\n\nPlay the game to understand our mission and win the displayed NFT after 100 points\n\nCatch a fish to start the game.';
greetBoardText.fontSize = 20;
greetBoardText.textWrapping = true;
greetBoardText.width = "70%";
greetBoardText.hAlign = "center";
greetBoardText.vAlign = "center";
greetBoardText.hTextAlign = "center";
greetBoardText.vTextAlign = "center";

engine.addEntity(nftEntity);

setTimeout(500, () => {
  createFishPool(
    _scene,
    engine,
    gameScore,
    scoreText,
    storyBoard,
    storyBoardText,
    gameLevel,
    storyBoardHeading,
    polkaDotBoard,
    greetBoard,
    greetBoardText
  );
  engine.addSystem(new SwimJumpMove());
  engine.addSystem(new PolkaBlink());
});
