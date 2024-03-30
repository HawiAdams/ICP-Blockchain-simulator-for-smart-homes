package simblock.node.routing;

import java.util.ArrayList;
import simblock.node.Node;

/**
 * An abstraction of the a routing table used by a {@link Node}.
 */
public abstract class AbstractRoutingTable {
  private final Node selfNode;
  private int numConnection = 8;

  /**
   * Instantiates a new Abstract routing table.
   *
   * @param selfNode the self node
   */
  public AbstractRoutingTable(Node selfNode) {
    this.selfNode = selfNode;
  }

  /**
   * Gets self node.
   *
   * @return the self node
   */
  protected Node getSelfNode() {
    return selfNode;
  }

  /**
   * Sets the number of possible active connections.
   *
   * @param numConnection the n connection
   */
  public void setNumConnection(int numConnection) {
    this.numConnection = numConnection;
  }

  /**
   * Gets the number of possible active connections.
   *
   * @return the connection
   */
  public int getNumConnection() {
    return this.numConnection;
  }

  /**
   * Table initialization.
   */
  public abstract void initTable();

  /**
   * Gets neighbors.
   *
   * @return the neighbors
   */
  public abstract ArrayList<Node> getNeighbors();

  /**
   * Add a neighbor to the list of neighbors.
   *
   * @param node the node
   * @return the success state of the operation
   */
  public abstract boolean addNeighbor(Node node);

  /**
   * Remove the neighbor from the list of neighbors.
   *
   * @param node the node
   * @return the success state of the operation
   */
  public abstract boolean removeNeighbor(Node node);

  /**
   * Add inbound boolean.
   *
   * @param from the from
   * @return the boolean
   */
  //TODO possibly incoming requests - just the hook I need
  public boolean addInbound(Node from) {
    return false;
  }

  /**
   * Remove inbound boolean.
   *
   * @param from the from
   * @return the boolean
   */
  //TODO possibly incoming requests - just the hook I need
  public boolean removeInbound(Node from) {
    return false;
  }

  /**
   * Accept block.
   */
  //TODO unclear what this does
  public void acceptBlock() {
  }
}
