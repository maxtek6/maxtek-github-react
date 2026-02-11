import { Link, Tile } from '@carbon/react';
import * as motion from "motion/react-client"

const AvatarLink = ({ href, size = 96, linkProps = {} }) => {
    const iconSrc = `${href}.png`;
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={href}
            className="org-graph__avatar-link"
            style={{ display: 'inline-flex' }}
            {...linkProps}
        >
            <img
                src={iconSrc}
                alt=""
                width={size}
                height={size}
                style={{ borderRadius: '50%', boxShadow: '0 0 0 4px rgba(0,0,0,0.2)' }}
            />
        </Link>
    );
};

const ORBIT_RADIUS = 140;
const ORBIT_DURATION = 24;

const OrbitingAvatar = ({ href, index, total }) => {
    const startAngle = (index / total) * 360;
    const avatarSize = 72;

    return (
        // 1. Position the pivot at the exact center of the container
        <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: 0,
                marginLeft: 0,
                width: 0,
                height: 0,
            }}
        >
            {/* 2. Rotate around the pivot (Motion only handles rotation here) */}
            <motion.div
                initial={{ rotate: startAngle }}
                animate={{ rotate: startAngle + 360 }}
                transition={{ repeat: Infinity, ease: 'linear', duration: ORBIT_DURATION }}
            >
                {/* 3. Push outward by orbit radius */}
                <div style={{ transform: `translateX(${ORBIT_RADIUS}px)` }}>
                    {/* 4. Counter-rotate to keep avatar upright */}
                    <motion.div
                        initial={{ rotate: -startAngle }}
                        animate={{ rotate: -(startAngle + 360) }}
                        transition={{ repeat: Infinity, ease: 'linear', duration: ORBIT_DURATION }}
                    >
                        {/* 5. Offset by half the avatar size so its center sits on the orbit path */}
                        <div style={{ marginLeft: -avatarSize / 2, marginTop: -avatarSize / 2 }}>
                            <AvatarLink href={href} size={avatarSize} />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

const OrgGraph = ({ members = [] }) => (
    <Tile>
        <div
            style={{
                position: 'relative',
                width: '100%',
                maxWidth: 420,
                aspectRatio: '1 / 1',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <AvatarLink href="https://github.com/maxtek6" size={112} />
            {members.map((member, index) => (
                <OrbitingAvatar key={member} href={member} index={index} total={members.length} />
            ))}
        </div>
    </Tile>
);

export default OrgGraph;