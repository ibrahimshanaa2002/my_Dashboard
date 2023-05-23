import {UUID} from "uuid-generator-ts";

export class UUIDUtility {
  private static uuidSet: Set<string> = new Set();

  private constructor() {
  }

  /**
   * This method will generate a new UUID
   */
  static generateUUID(): string {
    let uuid = new UUID();
    while(UUIDUtility.uuidSet.has(uuid.toString())){
      uuid =  new UUID();
    }
    UUIDUtility.uuidSet.add(uuid.toString());
    return uuid.toString();
  }
}
