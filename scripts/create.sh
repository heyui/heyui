if [ "$1" = '' ] ; then
echo "Error: Please provide the component name."
exit 0;
fi

touch themes/components/$1.less
mkdir src/components/$1
touch src/components/$1/$1.vue
touch src/components/$1/index.js

touch doc/components/component/other/$1.vue
touch doc/components_en/component/other/$1.vue

touch doc/components/demos/other/$11.vue
touch doc/components/demos/other/$12.vue

touch doc/components_en/demos/other/$11.vue
touch doc/components_en/demos/other/$12.vue

