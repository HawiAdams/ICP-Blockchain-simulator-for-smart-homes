package simblock.task;

import simblock.block.Block;
import simblock.node.Node;

/**
 * The type Abstract minting task represents .
 */
public abstract class AbstractMintingTask implements Task {
  /**
   * The node to mint the block.
   */
  private final Node minter;
  /**
   * The parent block.
   */
  private final Block parent;

  /**
   * Block interval in milliseconds.
   */
  private final long interval;

  /**
   * Instantiates a new Abstract minting task.
   *
   * @param minter   the minter
   * @param interval the interval in milliseconds
   */
  public AbstractMintingTask(Node minter, long interval) {
    this.parent = minter.getBlock();
    this.minter = minter;
    this.interval = interval;
  }

  /**
   * Gets minter.
   *
   * @return the minter
   */
  public Node getMinter() {
    return minter;
  }

  /**
   * Gets the minted blocks parent.
   *
   * @return the parent
   */
  public Block getParent() {
    return parent;
  }

  @Override
  public long getInterval() {
    return this.interval;
  }
}
