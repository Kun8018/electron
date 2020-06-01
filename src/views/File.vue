<template>

 <div style="margin-bottom: 20px;"> 

  <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
        <el-tab-pane
            v-for="(item, index) in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
        >
            {{item.content}}
        </el-tab-pane>
        
        <el-tab-pane closable >
            <span slot="label"><i class="el-icon-plus" @click="addTab(editableTabsValue)"></i></span>
            我的行程
        </el-tab-pane>
        
</el-tabs>

</div>

</template>
<script>
export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: '文本1',
          name: '1',
          content: 'Tab 1 content'
        },
         ],
        tabIndex: 2
      }
    },
    methods: {
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'Unsaved',
          name: newTabName,
          content: '新代码'
        });
        this.editableTabsValue = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>
<style lang="stylus">
.el-tab-pane {
    border-radius: 25px;
}
</style>