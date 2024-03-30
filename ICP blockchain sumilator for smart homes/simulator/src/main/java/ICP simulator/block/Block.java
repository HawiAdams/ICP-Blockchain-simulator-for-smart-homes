package simblock.block;

import simblock.node.Node;

/**
 * The representation of a block.
 */
public class Block {
  /**
   * The current height of the block.
   */
  private final int height;

  /**
   * The parent {@link Block}.
   */
  private final Block parent;

  /**
   * The {@link Node} that minted the block.
   */
  private final Node minter;

  /**
   * Minting timestamp, absolute time since the beginning of the simulation.
   */
  private final long time;

  /**
   * Block unique id.
   */
  private final int id;

  /**
   * Latest known block id.
   */
  private static int latestId = 0;

  /**
   * Instantiates a new Block.
   *
   * @param parent the parent
   * @param minter the minter
   * @param time   the time
   */
  public Block(Block parent, Node minter, long time) {
    this.height = parent == null ? 0 : parent.getHeight() + 1;
    this.parent = parent;
    this.minter = minter;
    this.time = time;
    this.id = latestId;
    latestId++;
  }

  /**
   * Get height int.
   *
   * @return the int
   */
  public int getHeight() {
    return this.height;
  }

  /**
   * Get parent block.
   *
   * @return the block
   */
  public Block getParent() {
    return this.parent;
  }

  /**
   * Get minter node.
   *
   * @return the node
   */
  @SuppressWarnings("unused")
  public Node getMinter() {
    return this.minter;
  }

  /**
   * Get time.
   *
   * @return the time
   */
  //TODO what format
  public long getTime() {
    return this.time;
  }

  /**
   * Gets the block id.
   *
   * @return the id
   */
  //TODO what format
  public int getId() {
    return this.id;
  }

  /**
   * Generates the genesis block. The parent is set to null and the time is set to 0
   *
   * @param minter the minter
   * @return the block
   */
  @SuppressWarnings("unused")
  public static Block genesisBlock(Node minter) {
    return new Block(null, minter, 0);
  }

  /**
   * Recursively searches for the block at the provided height.
   *
   * @param height the height
   * @return the block with the provided height
   */
  public Block getBlockWithHeight(int height) {
    if (this.height == height) {
      return this;
    } else {
      return this.parent.getBlockWithHeight(height);
    }
  }

  /**
   * Checks if the provided block is on the same chain as self.
   *
   * @param block the block to be checked
   * @return true if block are on the same chain false otherwise
   */
  public boolean isOnSameChainAs(Block block) {
    if (block == null) {
      return false;
    } else if (this.height <= block.height) {
      return this.equals(block.getBlockWithHeight(this.height));
    } else {
      return this.getBlockWithHeight(block.height).equals(block);
    }
  }
}
