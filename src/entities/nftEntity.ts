const nftEntity = new Entity();
const shapeComponent = new NFTShape(
  "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/38621931513658036828538505940480792531541598043317606647644512495590086541313",
  {
    color: Color3.Green(),
    style: PictureFrameStyle.Gold_Edges,
  }
);
nftEntity.addComponent(shapeComponent);
nftEntity.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/38621931513658036828538505940480792531541598043317606647644512495590086541313",
      "Prize NFT"
    );
  })
);
nftEntity.addComponent(
  new Transform({
    position: new Vector3(20, 6, 12.5),
    rotation: new Quaternion(0, 0, -1, 1),
    scale: new Vector3(7, 7, 7),
  })
);

export { nftEntity };
