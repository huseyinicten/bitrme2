<template>
    <div class="menu" :class="{ 'small-menu': smallMenu }">
      <MenuItem
        v-for="(item, index) in menuTree"
        :key="index"
        :data="item.children"
        :label="item.label"
        :icon="item.icon"
        :depth="0"
       
         />
      
   
  
  </div> 
  
  </template>
  
  <script>
  import MenuItem from './MenuItem.vue';
  
  
  export default {
    name: 'recursive-menu',
    data() {
      return {
        smallMenu: false,
        menuTree: [
          {
            


            label: "ANASAYFA ",
            icon: "house",
            children: [
              {
                label: "Analizler",
                icon: "fiber_manual_record",
              },
              {
                label: " CRM",
                icon: "fiber_manual_record"
              },
              {
                label: "E-ticaret",
                icon: "fiber_manual_record"
              },
              
              {
                label: "Lojistik",
                icon: "fiber_manual_record"
              }
            ]
          },
          {
            label: "SAYFALAR",
            icon: "task",
           children: [
              {
                label: "Son Eklenenler",
                icon: "fiber_manual_record",
                children: [
                  {
                    label: "Analiz Sayfaları",
                    icon: "fiber_manual_record",
                    children: [
                      {
                        label: "Kullanıcı analizi",
                        icon: "fiber_manual_record"
                      }
                    ]
                  }
                ]
              },
              {
                label: "Eklenmesi Planlananlar",
                icon: "fiber_manual_record"
              }
            ]
          },
          {
            label: "KULLANICILAR",
            icon: "group",
            children: [
              {
                label: "Kullanıcı Ekle",icon: "group_add",
              },
              
              {
                label: "Kullanıcı Sil",icon: "group_remove",
              },
              {
                label: "Kullanıcı Ayarları",icon: "settings_applications",
              }
            ]
          },
          {
            label: "Ayarlar",
            icon: "settings"
          }
        ]
      };
    },
    components: {
      MenuItem,
      
    }
   
  
  };</script>
  
  <style lang="scss" scoped>
  .menu {
    
    top:20;
    position: fixed;
    height: 100vh;
    width: 240px;
    left:0 ;
    top: 0;
    border-right: 2px solid #400000;
    transition: all .3s ease;
    overflow: auto;
    background: linear-gradient(to top, #2d0134, #34011c, #130303);
    
    i {
      position: fixed;
      left: 250px;
      font-size: 20px;
      top: 15px;
      user-select: none;
      cursor: pointer;
      transition: all .3s ease;
    }
    
  
    
      }
   </style>
  
  