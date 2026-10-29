import type { AvatarVariant, Category, Person, Task } from '../types'

const minutesAgo = (minutes: number) => new Date(Date.now() - minutes * 60_000).toISOString()

const person = (name: string, avatar: AvatarVariant): Person => ({ name, avatar })

export const CURRENT_USER = person('阿栗', 'chestnut')

/**
 * 演示数据：人物、委托与联系方式均为虚构，仅用于原型展示。
 */
export const INITIAL_TASKS: Task[] = [
  {
    id: 'notice-01',
    title: '谁在明德楼捡到一把蓝伞？',
    description:
      '早上在 301 上完课就找不到了，伞柄上挂着一只小木鱼。可能落在教室后排，捡到的同学滴滴我，请你喝热奶茶。',
    category: 'help',
    status: 'open',
    createdAt: minutesAgo(18),
    location: '明德楼 3 楼',
    reward: '一杯热奶茶',
    author: person('小满', 'sprout'),
  },
  {
    id: 'notice-02',
    title: '今晚图书馆四楼一起自习',
    description:
      '带电脑来赶大作业，想找个搭子互相盯一下进度。六点半到闭馆，中间可以一起去楼下买咖啡。',
    category: 'partner',
    status: 'open',
    createdAt: minutesAgo(34),
    location: '逸夫图书馆 4 楼',
    reward: '请你喝贩卖机热美式',
    author: person('青柠', 'peach'),
  },
  {
    id: 'notice-03',
    title: '周日羽毛球缺一个搭子',
    description:
      '订了下午两点的场，现在两个人，想凑双打。水平很菜，主打一个出汗，球拍多的可以借你。',
    category: 'partner',
    status: 'open',
    createdAt: minutesAgo(56),
    location: '江浦体育馆',
    reward: '场地我订好了，人来就行',
    author: person('阿北', 'bean'),
  },
  {
    id: 'notice-04',
    title: '借把十字螺丝刀装书架',
    description:
      '宿舍书架螺丝松了，自己的工具落在家。用五分钟就还，顺路的话也可以帮你把桌柜紧一紧。',
    category: 'borrow',
    status: 'open',
    createdAt: minutesAgo(88),
    location: '浦江苑 7 栋',
    reward: '两个橘子',
    author: person('土豆', 'cloud'),
  },
  {
    id: 'notice-05',
    title: '化工原理吸收题卡住了',
    description:
      '第 6 章吸收计算，算一晚上都和答案对不上。厚学楼或线上都行，能帮我看看思路吗？',
    category: 'help',
    status: 'open',
    createdAt: minutesAgo(125),
    location: '厚学楼 / 线上',
    reward: '请你喝瑞幸',
    author: person('小树', 'pear'),
  },
  {
    id: 'notice-06',
    title: '出个半学期新的护眼台灯',
    description:
      '换了宿舍桌面布局，台灯闲置了。三档调光，灯管没毛病，毕业前想转给学弟学妹。',
    category: 'idle',
    status: 'open',
    createdAt: minutesAgo(180),
    location: '东苑食堂门口',
    reward: '20 元，可小刀',
    author: person('栗子', 'cloud'),
  },
  {
    id: 'notice-07',
    title: '一起去看校园歌手决赛',
    description:
      '室友临时去实验室，多出一张票。想找喜欢听歌的同学一起，散场可以从大学生活动中心慢慢走回去。',
    category: 'other',
    status: 'open',
    createdAt: minutesAgo(245),
    location: '大学生活动中心',
    reward: '票免费，再请你喝酸奶',
    author: person('团团', 'peach'),
  },
  {
    id: 'notice-08',
    title: '帮我把社团的矿泉水搬上六楼',
    description:
      '活动剩了一箱水，一个人搬不动。路过的同学顺手搭了把手，已经顺利搬完啦。',
    category: 'help',
    status: 'done',
    createdAt: minutesAgo(1440),
    location: '浦江苑 6 栋',
    reward: '两根冰棍',
    author: person('秋刀鱼', 'sprout'),
    claimant: CURRENT_USER,
  },
]

export const CATEGORY_ICON: Record<Category, 'heart' | 'people' | 'box' | 'tag' | 'sparkle'> = {
  help: 'heart',
  partner: 'people',
  borrow: 'box',
  idle: 'tag',
  other: 'sparkle',
}
