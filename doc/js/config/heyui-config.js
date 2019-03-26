
import HeyUI from '../../../src/index';
import utils from 'hey-utils';
import jsonp from 'fetch-jsonp';
import dict from './dict-config';

const loadData = function (filter, callback) {
  log('传递的参数', this.orgId);
  jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${filter}`)
    .then(response => response.json())
    .then((d) => {
      const result = d.result;
      const data = [];
      result.forEach((r) => {
        data.push({
          name: r[0],
          id: r[1] + Math.random()
        });
      });
      callback(data);
    });
};
const menus = utils.toArray(dict.components, 'key', 'title').sort((a, b) => a.title > b.title ? 1 : -1);

const enMenus = menus.map(item => ({ key: item.key, title: item.title.split(' ')[0] }));

// HeyUI.config('dict.keyName', "code");
// HeyUI.config('dict.titleName', "name");
export default () => {
  HeyUI.initDict({
    select: [{ title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }],
    simple: { 1: '苹果', 2: '梨子', 3: '香蕉', 4: '橙子', 5: '樱桃', 6: '超长超长超长超长超长超长超长超长超长超长超长超长超长' },
    menus,
    enMenus
  });

  HeyUI.config('autocomplete.default', {
    keyName: 'key'
  });

  HeyUI.config('autocomplete.configs', {
    simple: {
      loadData,
      keyName: 'id',
      titleName: 'name',
      minWord: 1
    },
    pageFilter: {
      keyName: 'key',
      titleName: 'title'
    }
  });

  let list = [
    { id: 1, title: '一级' },
    { id: 2, title: '二级' },
    { id: 3, title: '三级', disabled: true },
    { id: 10, title: '一级-0', parent: '1' },
    { id: 11, title: '一级-1', parent: '1' },
    { id: 12, title: '一级-2', parent: '1' },
    { id: 13, title: '一级-3', parent: '1' },
    { id: 14, title: '一级-4', parent: '1' },
    { id: 101, title: '一级-0-1', parent: '10' },
    { id: 102, title: '一级-0-2', parent: '10' },
    { id: 103, title: '一级-0-3', parent: '10' },
    { id: 20, title: '二级-0', parent: '2' },
    { id: 21, title: '二级-1', parent: '2' },
    { id: 22, title: '二级-2', parent: '2' },
    { id: 23, title: '二级-3', parent: '2' },
    { id: 24, title: '二级-4', parent: '2' },
    { id: 30, title: '三级-0', parent: '3' },
    { id: 31, title: '三级-1', parent: '3' },
    { id: 32, title: '三级-2', parent: '3' },
    { id: 33, title: '三级-3', parent: '3' }
  ];
  HeyUI.config('tree.configs', {
    simple: {
      keyName: 'id',
      parentName: 'parent',
      titleName: 'title',
      dataMode: 'list',
      datas() {
        return list;
      }
    }
  });
  HeyUI.config('category.configs', {
    simple: {
      title: '测试',
      keyName: 'id',
      parentName: 'parent',
      titleName: 'title',
      dataMode: 'list',
      datas() {
        return list;
      }
    }
  });
};
