### 概述

该组件是在element cascader组件上进行修改的，增加了一些功能以及修改了一些特性：

#### 增加的功能

- 多选功能。 多选功能下， 值默认并不在输入框展示， 如果要展示值， 请将show-values选项置为true。（PS：只能在expand-trigger值为"hover"时启动该功能，因为若在click时启动，那么点击操作将会有展开下一级菜单和选中该菜单两个命令，这也意味着选中子菜单的值时父菜单必定是选中的，这是不合理的）

- 能够指定菜单弹出框（.el-cascader-menus）被追加到哪个元素后面。需要将append-to-body置为false,然后指定append-el的选择器。

  ```
  ​```
  <el-cascader-modified v-model="val"
      :options="options"
      :append-to-body="false"
      append-el="#app"></el-cascader-modified>
  ​```
  ```

  ​


#### 修改的特性

- 如果能够选择任何一级的选项， 那么父级菜单的disabled属性为true, 那么依然能够显示子菜单。 （原先是不能的）
- 在expand-trigger为hover时， 必须点击选项才能选中值。 （原先是hover上去就会选中值， 导致体验不好）


### 使用方式

#### 示例
```
<template>
  <el-cascader-modified
    :options="options"
    :show-all-levels="false"
    expand-trigger="hover"
    change-on-select
    v-model="val"
    multiple
    clearable
    filterable
    show-values
  ></el-cascader-modified>
</template>
<script>
    import Cascader from 'element-cascader-modified';
    import  'element-cascader-modified/dist/static/css/index.css';
    Vue.component(Cascader.name, Cascader);
</script>
```