export const enum ShapeFlags {
  ELEMENT = 1,  // 元素 string
  FUNCTIONAL_COMPONENT = 1 << 1, // 2 function
  STATEFUL_COMPONENT = 1 << 2,  // 4 object
  TEXT_CHILDREN = 1 << 3, // 8 文本
  ARRAY_CHILDREN = 1 << 4,  // 16 数组
  SLOTS_CHILDREN = 1 << 5, // 32 插槽
  TELEPORT = 1 << 6,  // 64 teleport
  SUSPENSE = 1 << 7,  // 128 suspense
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,  // 256 keep alive 组件
  COMPONENT_KEPT_ALIVE = 1 << 9,  // 512 keep alive 组件
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT  // 组件
}
