import styles from "../styles/Home.module.css";

const age80inWeeks = 4171;

export default function Graph({ ageExpected }) {
  const ageInWeeks = ageExpected * 52;
  const weeksLived = localStorage.getItem("weeksLived");
  const remainingWeeks = ageInWeeks - weeksLived;

  return (
    <div>
        {/* <div className={styles.graphLabelLeft}>
            <p>1</p>
            <p>5</p>
            <p>10</p>
            <p>15</p>
            <p>20</p>
            <p>25</p>
            <p>30</p>
            <p>35</p>
            <p>40</p>
            <p>45</p>
            <p>50</p>
            <p>55</p>
            <p>60</p>
            <p>65</p>
            <p>70</p>
            <p>75</p>
            <p>80</p>
        </div>
        <div className={styles.graphLabelTop}>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
            <p>15</p>
            <p>16</p>
            <p>17</p>
            <p>18</p>
            <p>19</p>
            <p>20</p>
            <p>21</p>
            <p>22</p>
            <p>23</p>
            <p>24</p>
            <p>25</p>
            <p>26</p>
            <p>27</p>
            <p>28</p>
            <p>29</p>
            <p>30</p>
            <p>31</p>
            <p>32</p>
            <p>33</p>
            <p>34</p>
            <p>35</p>
            <p>36</p>
            <p>37</p>
            <p>38</p>
            <p>39</p>
            <p>40</p>
            <p>41</p>
            <p>42</p>
            <p>43</p>
            <p>44</p>
            <p>45</p>
            <p>46</p>
            <p>47</p>
            <p>48</p>
            <p>49</p>
            <p>50</p>
            <p>51</p>
            <p>52</p>
        </div> */}
      <div className={styles.container}>
        {weeksLived &&
          Array(Number(weeksLived))
            .fill(null)
            .map((block, index) => {
              return (
                <div key={index} className={styles.blockLived}>
                  <p className={styles.paragraph}></p>
                </div>
              );
            })}
        {remainingWeeks &&
          Array(Number(remainingWeeks))
            .fill(null)
            .map((block, index) => {
              return (
                <div key={index} className={styles.blockRemaining}>
                  <p className={styles.paragraph}></p>
                </div>
              );
            })}
      </div>
    </div>
  );
}
