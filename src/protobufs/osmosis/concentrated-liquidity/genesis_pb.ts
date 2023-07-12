// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/concentrated-liquidity/genesis.proto (package osmosis.concentratedliquidity.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { TickInfo } from "./tickInfo_pb.js";
import { IncentiveRecord } from "./incentive_record_pb.js";
import { Position } from "./position_pb.js";
import { AccumulatorContent, Record } from "../accum/v1beta1/accum_pb.js";
import { Params } from "./params_pb.js";

/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.FullTick
 */
export class FullTick extends Message<FullTick> {
  /**
   * pool id associated with the tick.
   *
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * tick's index.
   *
   * @generated from field: int64 tick_index = 2;
   */
  tickIndex = protoInt64.zero;

  /**
   * tick's info.
   *
   * @generated from field: osmosis.concentratedliquidity.v1beta1.TickInfo info = 3;
   */
  info?: TickInfo;

  constructor(data?: PartialMessage<FullTick>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.FullTick";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "tick_index", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "info", kind: "message", T: TickInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FullTick {
    return new FullTick().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FullTick {
    return new FullTick().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FullTick {
    return new FullTick().fromJsonString(jsonString, options);
  }

  static equals(a: FullTick | PlainMessage<FullTick> | undefined, b: FullTick | PlainMessage<FullTick> | undefined): boolean {
    return proto3.util.equals(FullTick, a, b);
  }
}

/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.PoolData
 */
export class PoolData extends Message<PoolData> {
  /**
   * pool struct
   *
   * @generated from field: google.protobuf.Any pool = 1;
   */
  pool?: Any;

  /**
   * pool's ticks
   *
   * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.FullTick ticks = 2;
   */
  ticks: FullTick[] = [];

  /**
   * @generated from field: osmosis.concentratedliquidity.v1beta1.AccumObject spread_reward_accumulator = 3;
   */
  spreadRewardAccumulator?: AccumObject;

  /**
   * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.AccumObject incentives_accumulators = 4;
   */
  incentivesAccumulators: AccumObject[] = [];

  /**
   * incentive records to be set
   *
   * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.IncentiveRecord incentive_records = 5;
   */
  incentiveRecords: IncentiveRecord[] = [];

  constructor(data?: PartialMessage<PoolData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.PoolData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool", kind: "message", T: Any },
    { no: 2, name: "ticks", kind: "message", T: FullTick, repeated: true },
    { no: 3, name: "spread_reward_accumulator", kind: "message", T: AccumObject },
    { no: 4, name: "incentives_accumulators", kind: "message", T: AccumObject, repeated: true },
    { no: 5, name: "incentive_records", kind: "message", T: IncentiveRecord, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolData {
    return new PoolData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolData {
    return new PoolData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolData {
    return new PoolData().fromJsonString(jsonString, options);
  }

  static equals(a: PoolData | PlainMessage<PoolData> | undefined, b: PoolData | PlainMessage<PoolData> | undefined): boolean {
    return proto3.util.equals(PoolData, a, b);
  }
}

/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.PositionData
 */
export class PositionData extends Message<PositionData> {
  /**
   * @generated from field: osmosis.concentratedliquidity.v1beta1.Position position = 1;
   */
  position?: Position;

  /**
   * @generated from field: uint64 lock_id = 2;
   */
  lockId = protoInt64.zero;

  /**
   * @generated from field: osmosis.accum.v1beta1.Record spread_reward_accum_record = 3;
   */
  spreadRewardAccumRecord?: Record;

  /**
   * @generated from field: repeated osmosis.accum.v1beta1.Record uptime_accum_records = 4;
   */
  uptimeAccumRecords: Record[] = [];

  constructor(data?: PartialMessage<PositionData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.PositionData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "position", kind: "message", T: Position },
    { no: 2, name: "lock_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "spread_reward_accum_record", kind: "message", T: Record },
    { no: 4, name: "uptime_accum_records", kind: "message", T: Record, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PositionData {
    return new PositionData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PositionData {
    return new PositionData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PositionData {
    return new PositionData().fromJsonString(jsonString, options);
  }

  static equals(a: PositionData | PlainMessage<PositionData> | undefined, b: PositionData | PlainMessage<PositionData> | undefined): boolean {
    return proto3.util.equals(PositionData, a, b);
  }
}

/**
 * GenesisState defines the concentrated liquidity module's genesis state.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * params are all the parameters of the module
   *
   * @generated from field: osmosis.concentratedliquidity.Params params = 1;
   */
  params?: Params;

  /**
   * pool data containining serialized pool struct and ticks.
   *
   * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.PoolData pool_data = 2;
   */
  poolData: PoolData[] = [];

  /**
   * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.PositionData position_data = 3;
   */
  positionData: PositionData[] = [];

  /**
   * @generated from field: uint64 next_position_id = 4;
   */
  nextPositionId = protoInt64.zero;

  /**
   * @generated from field: uint64 next_incentive_record_id = 5;
   */
  nextIncentiveRecordId = protoInt64.zero;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "pool_data", kind: "message", T: PoolData, repeated: true },
    { no: 3, name: "position_data", kind: "message", T: PositionData, repeated: true },
    { no: 4, name: "next_position_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "next_incentive_record_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}

/**
 * In original struct of Accum object, store.KVStore is stored together.
 * For handling genesis, we do not need to include store.KVStore since we use
 * CL module's KVStore.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.AccumObject
 */
export class AccumObject extends Message<AccumObject> {
  /**
   * Accumulator's name (pulled from AccumulatorContent)
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: osmosis.accum.v1beta1.AccumulatorContent accum_content = 2;
   */
  accumContent?: AccumulatorContent;

  constructor(data?: PartialMessage<AccumObject>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.AccumObject";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "accum_content", kind: "message", T: AccumulatorContent },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccumObject {
    return new AccumObject().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccumObject {
    return new AccumObject().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccumObject {
    return new AccumObject().fromJsonString(jsonString, options);
  }

  static equals(a: AccumObject | PlainMessage<AccumObject> | undefined, b: AccumObject | PlainMessage<AccumObject> | undefined): boolean {
    return proto3.util.equals(AccumObject, a, b);
  }
}

