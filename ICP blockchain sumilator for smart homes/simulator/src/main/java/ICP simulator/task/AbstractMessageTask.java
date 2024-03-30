package simblock.task;

import static simblock.simulator.Network.getLatency;

import simblock.node.Node;

/**
 * The type Abstract message task.
 */
public abstract class AbstractMessageTask implements Task {
  /**
   * The sending entity.
   */
  private final Node from;
  /**
   * The receiving entity.
   */
  private final Node to;

  /**
   * Instantiates a new Abstract message task.
   *
   * @param from the sending entity
   * @param to   the receiving entity
   */
  public AbstractMessageTask(Node from, Node to) {
    this.from = from;
    this.to = to;
  }

  /**
   * Get the sending node.
   *
   * @return the <em>from</em> node
   */
  public Node getFrom() {
    return this.from;
  }

  /**
   * Get the receiving node.
   *
   * @return the <em>to</em> node
   */
  public Node getTo() {
    return this.to;
  }

  /**
   * Get the message delay with regards to respective regions.
   *
   * @return the message sending interval
   */
  public long getInterval() {
    long latency = getLatency(this.from.getRegion(), this.to.getRegion());
    // Add 10 milliseconds here, why?
    //TODO
    return latency + 10;
  }

  /**
   * Receive message at the <em>to</em> side.
   */
  public void run() {
    this.to.receiveMessage(this);
  }

}