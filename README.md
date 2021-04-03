# Home Assistant Entity Action

Perform actions in entities thought a github action.

I quickly hacked together this action to change the lights in my room depending on the action status.


#How to use

Example action:

```
on: [push]
jobs:
  make_light_green:
    runs-on: ubuntu-latest
    name: Money color
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        
      - name: Change light color to green
        uses: actions/homeassistant-entity-action@v1
        with:
          hasURL: 'https://yourHasURL.duckdns.com'
          token: '${{ secrets.TOKEN }}'
          entityID: 'light.my_cool_light'
          payload: '{"rgb_color": [ 0, 255, 0 ]}'
```

Options:

| Option | Description | Default value |Required |
| :---: | :---: | :---: | :---: |
| hasURL | URL of your HAS instance, including domain and service. E.g: https://yourHasURL.duckdns.com/api/<domain>/<service>
| none | ✔ |
| token | Your long lived token. To generate one, navigate into your profile, inside HAS, and create one. | none | ✔ |
| entityID | ID of the entity your going to interact | none | ✔ |
| payload | URL of your HAS instance | false |  |
